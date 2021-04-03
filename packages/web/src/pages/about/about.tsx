import React from "react";
import { Typography } from "antd";
import { useData, useLoading } from "../../firebase";
import { Loading } from "../../components/loading";
const { Title, Link, Text } = Typography;

const About: React.FC = () => {
  const isLoading = useLoading("globalStats");
  const data: Record<string, any> = useData("globalStats");

  let analyzedMatches = <Loading />;

  if (!isLoading) {
    analyzedMatches = data["analyzedMatches"];
  }

  return (
    <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
      <Title level={2} style={{ paddingTop: 15 }} id={"crawler"}>
        Input Data and Crawler process
      </Title>
      Relic doesn't provide insight or any easy way to get the match data. We are forced to crawl
      the leaderboards and get <Text strong>limited data</Text> from there.
      <br />
      <br />
      We are currently crawling top 200 positions from all kinds of COH2 leaderboards (1v1,2v2
      etc). This gives us 5200(~3000 unique) top players for the given day. We than proceed with
      analysing/saving their matches for the given day. This gives us ~4000 matches / day.
      <br />
      And we are tracking only auto-match games which are against players (filter out vs AI
      games).
      <br />
      More technical description of this process can be found{" "}
      <Link href="https://github.com/petrvecera/coh2ladders#crawler-process" target="_blank">
        here
      </Link>
      <br />
      <br />
      However based on{" "}
      <Link href="http://coh2chart.com/" target="_blank">
        this data
      </Link>{" "}
      from 2017 we expect that there is around ~100k matches/day. Which means{" "}
      <Text strong>we are processing just 4% of all games</Text>.
      <br />
      But we are processing the best 4% so it might not represent the majority of the games.
      However it's still good insight into the top games. So you might get inspired.
      <br />
      <br />
      The amount of data with some types of games is really a problem. You can see that winrate
      each day can really fluctuate by tens of % if the amount of games is under 1k for the given
      date.
      <br />
      <br />
      <b>So far analyzed {analyzedMatches} matches.</b>
      <a href={"#future"}>
        <Title level={2} style={{ paddingTop: 15 }} id={"future"}>
          Future functionality
        </Title>
      </a>
      As you can see lot of features and functionality is not finished right now. Feel free to
      vote/discuss on the forums about the priority of each feature.
      <br />
      <Text strong>Match overview</Text>
      <br />
      We would like to add much better match overview. Relic stores much more data for each match
      that it's shown. We are able to get this data and we would like to display much better match
      overview which would include the map, player average rankings and more info.
      <br />
      Also the players would have possibility to request their matches to be stored (so not only
      the top 4%).
      <br />
      <br />
      <Text strong>Players overview</Text>
      <br />
      We would like to give better player overview. For example track their record how good they
      are playing on each map. Maybe add percentile to their rank because each mode has different
      amount of players and ranked positions.
      <br />
      <br />
      <Text strong>Other</Text>
      <br />
      There is huge amount of things we could improve everywhere. The stats charts possibilities
      are limitless. We definitely want to add analysis based on each map. To see if some maps are
      better for different race. If you have any ideas feel free to suggest them.
      <a href={"#bugs"}>
        <Title level={2} style={{ paddingTop: 15 }} id={"bugs"}>
          Bugs, ideas and contribution
        </Title>
      </a>
      This project is completely open source, head over to the{" "}
      <Link href="https://github.com/petrvecera/coh2ladders" target="_blank">
        GitHub Repo
      </Link>{" "}
      for more info. Any contributions are welcomed. However please read more info in the repo
      description if you have required skill set.
      <br />
      <br />
      You can report any bugs or feature requests on{" "}
      <Link href="https://github.com/petrvecera/coh2ladders/issues" target="_blank">
        GitHub issues
      </Link>
      .
      <br />
      <br />
      For any discussion, ideas or anything else. Head over to the coh2.org{" "}
      <Link href="https://www.coh2.org/topic/107278/coh2-global-stats" target="_blank">
        forums topic
      </Link>
      .
      <br />
      You can also use this site email or dm me{" "}
      <Link href="https://www.coh2.org/user/112252/pagep" target="_blank">
        at the forums.
      </Link>
      <a href={"#donations"}>
        <Title level={2} style={{ paddingTop: 15 }} id={"donations"}>
          Donations and support
        </Title>
      </a>
      We are able to support the basic hosting, domain and statistics/info functionality from our
      own pocket. This will rank up for tens of dollars per year. Plus we don't charge anything
      for our time.
      <br />
      <br />
      The original idea was to give unlimited match history for each player. Because this is
      something which Relic with their "Recent Matches" doesn't support (They track
      only last 10 games for each mode for each player). However when we started
      working on this project, we greatly underestimated the amount of data which is produced
      every day.
      <br />
      We are tracking merely 120k matches and the DB holding this has up to 4GB already (as of
      writing this page). We are guessing COH2 to have ~100k matches/day.
      <br />
      We are still planning to deliver advanced match overview which would bring more
      functionality and better insight into your past games. But we will most likely not be able
      to hold more matches than relic already does because of the increased cost without some kind
      of income (donations/ads?).
      <br />
      <br />
      <br />
      If you would like to give $ support, you can do so HERE|TODO ADD SOME DONATION|
      <br />
      100% of donations will go towards this project costs
      <br />
      <br />
      <br />
      Past donations:
    </div>
  );
};

export default About;
