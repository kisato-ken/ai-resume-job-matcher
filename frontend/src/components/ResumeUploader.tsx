"use client";

import { useState, useCallback } from "react";

interface ResumeUploaderProps {
  onResumeUploaded: (id: string, data: any) => void;
  resumeData: any;
}

export default function ResumeUploader({ onResumeUploaded, resumeData }: ResumeUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    setUploadStatus(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/api/v1/upload-resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      setUploadStatus("success");
      onResumeUploaded(result.resume_id, result);
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("error");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="card hover-lift">
      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Upload Your Resume</h2>
              <p className="text-gray-600">PDF, DOCX, or TXT format • Max 10MB</p>
            </div>
          </div>
        </div>

        <div
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            isDragging
              ? "border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 scale-105"
              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {isUploading ? (
            <div className="flex flex-col items-center fade-in">
              <div className="relative mb-6">
                <div className="w-16 h-16 spinner"></div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-900">Analyzing your resume...</p>
                <p className="text-gray-600">Our AI is extracting skills, experience, and insights</p>
              </div>
              <div className="mt-6 w-full max-w-xs">
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full animate-pulse" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="scale-in">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center float">
                  <svg
                    className="w-10 h-10 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                {isDragging && (
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {isDragging ? "Drop your resume here!" : "Drag & drop your resume"}
                  </h3>
                  <p className="text-gray-600">
                    {isDragging 
                      ? "Release to start the analysis" 
                      : "or click to browse your files"
                    }
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">PDF</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">DOCX</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">TXT</span>
                </div>
              </div>

              <input
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          )}
        </div>

        {uploadStatus && (
          <div className={`mt-6 p-4 rounded-xl fade-in ${
            uploadStatus === "success" 
              ? "status-success" 
              : "status-error"
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                uploadStatus === "success" ? "bg-green-500" : "bg-red-500"
              }`}>
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {uploadStatus === "success" ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  )}
                </svg>
              </div>
              <span className="font-semibold">
                {uploadStatus === "success" 
                  ? "Resume uploaded successfully!" 
                  : "Upload failed. Please try again."
                }
              </span>
            </div>
          </div>
        )}

        {resumeData && (
          <div className="mt-8 slide-up">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis Complete!</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Skills found:</span>
                      <span className="ml-2 font-semibold text-green-700">
                        {resumeData.skills?.length || resumeData.skills_found || 0}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Experience:</span>
                      <span className="ml-2 font-semibold text-green-700">
                        {resumeData.experience_years || 'N/A'} years
                      </span>
                    </div>
                  </div>
                  {resumeData.summary && (
                    <div className="mt-3 p-3 bg-white rounded-lg">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {resumeData.summary.substring(0, 150)}
                        {resumeData.summary.length > 150 && '...'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
