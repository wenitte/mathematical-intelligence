# 

Source: https://proofwiki.org/wiki/Closed_Ball_in_Metric_Space_is_Closed_Neighborhood


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $x \in A$.
Let $\epsilon \in \R_{>0}$.
Let $\map {B_\epsilon^-} x$ be the closed $\epsilon$-ball of $x$ in $M$.

Then $\map {B_\epsilon^-} x$ is a closed neighborhood of $x$ in $M$.


Proof
From Closed Ball contains Smaller Open Ball:

$\map {B_\epsilon} x \subseteq \map {B_\epsilon^-} x$
where $\map {B_\epsilon} x$ denotes the open $\epsilon$-ball of $x$ in $M$.
Hence $\map {B_\epsilon^-} x$ is a neighborhood of $x$ by definition.

From Closed Ball is Closed in Metric Space:

$\map {B_\epsilon^-} x$ is closed in $M$
It follows that $\map {B_\epsilon^-} x$ is a closed neighborhood of $x$ in $M$ by definition.
$\blacksquare$





