import React from "react";
import "./singlepost.css";
import tech from "./tech-2.jpg";

export default function Singlepost() {
  return (
    <div className="singlePost">
      <img className="singleImg" src={tech}></img>

      <div className="singlePostInfo">
        <div className="pseudo"></div>
        <h1 className="singlePostTitle">AI: In the world of Humanoids?!</h1>
        <div className="singelPostEdits">
          <i class="singlePostIcons fa-solid fa-pen-to-square"></i>
          <i class="singlePostIcons fa-solid fa-trash-can"></i>
        </div>
      </div>

      <div className="singlePostInfo authTime">
        <span className="singlePostInfoItem">Author: Jaimin</span>
        <span className="singlePostInfoItem">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Ldsntextual Rephrasing in Google Assistant Tuesday, May 17, 2022 Posted
        by Aurelien Boffy, Senior Staff Software Engineer, and Roberto
        Pieraccini, Engineering Director, Google Assistant When people converse
        with one another, context and references play a critical role in driving
        their conversation more efficiently. For instance, if one asks the
        question “Who wrote Romeo and Juliet?” and, after receiving an answer,
        asks “Where was he born?”, it is clear that ‘he’ is referring to William
        Shakespeare without the need to explicitly mention him. Or if someone
        mentions “python” in a sentence, one can use the context from the
        conversation to determine whether they are referring to a type of snake
        or a computer language. If a virtual assistant cannot robustly handle
        context and references, users would be required to adapt to the
        limitation of the technology by repeating previously shared contextual
        information in their follow-up queries to ensure that the assistant
        understands their requests and can provide relevant answers. In this
        post, we present a technology currently deployed on Google Assistant
        that allows users to speak in a natural manner when referencing context
        that was defined in previous queries and answers. The technology, based
        on the latest machine learning (ML) advances, rephrases a user’s
        follow-up query to explicitly mention the missing contextual
        information, thus enabling it to be answered as a stand-alone query.
        While Assistant considers many types of context for interpreting the
        user input, in this post we are focusing on short-term conversation
        history. Context Handling by Rephrasing One of the approaches taken by
        Assistant to understand contextual queries is to detect if an input
        utterance is referring to previous context and then rephrase it
        internally to explicitly include the missing information. Following on
        from the previous example in which the user asked who wrote Romeo and
        Juliet, one may ask follow-up questions like “When?”. Assistant
        recognizes that this question is referring to both the subject (Romeo
        and Juliet) and answer from the previous query (William Shakespeare) and
        can rephrase “When?” to “When did William Shakespeare write Romeo and
        Juliet?” While there are other ways to handle context, for instance, by
        applying rules directly to symbolic representations of the meaning of
        queries, like intents and arguments, the advantage of the rephrasing
        approach is that it operates horizontally at the string level across any
        query answering, parsing, or action fulfillment module.
      </p>
    </div>
  );
}
