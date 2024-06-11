'use client';

import { Editor } from "@tinymce/tinymce-react";

export default function Home() {
  return (
    <div>
      <h1>Anotações</h1>
      
      <form action="post">
        <input type="text" placeholder="Título" />
        <Editor
          apiKey='jy2eqap7ne6ax97301l4rwb946n864ziv2egn5yp0xv430yj'
          init={{
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [
              { value: 'First.Name', title: 'First Name' },
              { value: 'Email', title: 'Email' },
            ],
            ai_request: (request: any, respondWith: any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
          }}
        />
      </form>
    </div>
  );
}
