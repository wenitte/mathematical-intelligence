# 

Source: https://proofwiki.org/wiki/Infimum_of_Upper_Sums_Never_Smaller_than_Lower_Sum

Theorem
Let $\closedint a b$ be a closed real interval.
Let $f$ be a bounded real function defined on $\closedint a b$.
Let $S$ be a finite subdivision of $\closedint a b$.
Let $\map L S$ be the lower Darboux sum of $f$ on $\closedint a b$ with respect to $S$.
Let $\map U P$ be the upper Darboux sum of $f$ on $\closedint a b$ with respect to a finite subdivision $P$.

Then:

$\inf_P \map U P \ge \map L S$


Proof
From Upper Sum Never Smaller than Lower Sum for any Pair of Subdivisions, $\map L S$ is a lower bound for the real set:

$T = \leftset {\map U P: P}$ is a finite subdivision of $\rightset {\closedint a b}$
Since $\inf_P \map U P$ is the infumum of $T$:

$\inf_P \map U P \ge \map L S$
Hence the result.
$\blacksquare$





