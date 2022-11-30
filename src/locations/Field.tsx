import React from "react";
import { FieldExtensionSDK } from "@contentful/app-sdk";
import { useSDK } from "@contentful/react-apps-toolkit";
import { RichTextEditor } from "@koyama-tagbangers/field-editor-rich-text";

const Field = () => {
  const sdk = useSDK<FieldExtensionSDK>();

  React.useEffect(() => {
    sdk.window.updateHeight(450);
  }, [sdk]);

  return <RichTextEditor sdk={sdk} isInitiallyDisabled={false} />;
};

export default Field;
