
import { h } from "preact";
import { Proview } from "../proview";

export function Content() {
  const proviewConfiguration = {
    proviewUrl: "https://cdn.proview.io/testing/v7-universal/v3.6/init.js",
    proviewToken: "e376b1ec-4a5b-43d9-8821-72de13f7554a",
    profileId: "p-" + Math.random(),
    sessionId: "s-" + Math.random(),
    sessionTitle: "Sample Proview Application",
    sessionType: "ai_proctor",
  };

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <Proview
        proviewUrl={proviewConfiguration.proviewUrl}
        proviewToken={proviewConfiguration.proviewToken}
        profileId={proviewConfiguration.profileId}
        sessionId={proviewConfiguration.sessionId}
        sessionTitle={proviewConfiguration.sessionTitle}
        sessionType={proviewConfiguration.sessionType}
      />
      test
    </div>
  );
}
