"use client";  // 필수: Portal, DOM 조작, 이벤트 핸들링 때문

import { useState } from "react";

import TextArea from "@/components/common/Input/TextArea";
import BaseModal from "@/components/common/Modal/BaseModal";

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuestionModal = ({ isOpen, onClose }: QuestionModalProps) => {
	const [question, setQuestion] = useState("");

	return (
		<BaseModal isOpen={isOpen} onClose={onClose}>
			<div>
				<div className="p-8">
					<TextArea
						placeholder="Please write out your question."
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
						rows={6}
						maxLength={500}
					/>
				</div>
			</div>
		</BaseModal>
	);
};

export default QuestionModal;