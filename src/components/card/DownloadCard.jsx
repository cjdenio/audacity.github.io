import React from "react";

function DownloadCard(props) {

const {title, downloadURL, buttonText, downloadType, checksum} = props;
  return (
    <div class="border border-bg-200 rounded-md p-6">
      <div class="flex flex-col sm:flex-row gap-2 justify-between items-center">
        <h4>{title}</h4>
        <a
          href={downloadURL}
          class="flex justify-center text-center items-center px-4 h-12 w-full sm:w-fit bg-slate-200 hover:bg-slate-300 text-base text-black rounded"
        >
          {`${buttonText}` + `${downloadType}`}
        </a>
      </div>

      {checksum && (
        <div class="flex flex-col mt-8 border-t pt-4">
          <label>Checksum:</label>
          <div class="mt-2 p-2 bg-gray-50 border border-gray-200">
            <small class="break-words">{checksum}</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default DownloadCard;
