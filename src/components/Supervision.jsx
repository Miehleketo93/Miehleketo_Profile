// ============ components/Supervision.jsx ============
import React, { useState } from 'react'
import {  SECONDARY } from '../constants/Colors'
function Supervision() {


  return (
    <section id="supervision" className="py-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Academic Supervision</h2>
        <p className="text-gray-700 mb-6">
          Honours student supervision at the University of Pretoria (2025) with Data Science
          for Social Impact.
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border-l-4" style={{ borderColor: SECONDARY }}>
            <div className="font-semibold text-gray-900">
              Bridging Explainability and Ethics in AI: Improving Trust and Reducing
              Misinformation
            </div>
            <div className="text-sm text-gray-600 mt-2">
              <span className="font-medium">Student:</span> Kumbirai Shonhiwa · 2025 Honours
              Project
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border-l-4" style={{ borderColor: SECONDARY }}>
            <div className="font-semibold text-gray-900">
              SE-Spline Attention-Based Convolutional Kolmogorov-Arnold Network for Intrusion
              Detection
            </div>
            <div className="text-sm text-gray-600 mt-2">
              <span className="font-medium">Student:</span> Wadalisa Molokwe · 2025 Honours
              Project
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border-l-4" style={{ borderColor: SECONDARY }}>
            <div className="font-semibold text-gray-900">
              Dynamic Context-Aware Multimodal Knowledge Graph for Real-Time Reasoning
            </div>
            <div className="text-sm text-gray-600 mt-2">
              <span className="font-medium">Student:</span> Zingisa Matwana · 2025 Honours
              Project
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Supervision;