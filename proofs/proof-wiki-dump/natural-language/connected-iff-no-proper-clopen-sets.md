# 

Source: https://proofwiki.org/wiki/Connected_iff_no_Proper_Clopen_Sets


It has been suggested that this page or section be merged into Equivalence of Definitions of Connected Topological Space.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a topological space.

Then:

$T$ is connected
if and only if:

there exists no non-empty proper subset of $S$ which is clopen in $T$.


Proof
Sufficient Condition
Let $T$ be connected.
Aiming for a contradiction, suppose there exists $H \subset S$ such that:

$H$ is clopen in $T$
$H$ is a non-empty proper subset of $S$, that is:
$\O \ne H \ne S$
Then $H$ and $\relcomp S H$ are open sets whose union is $S$.
Thus $\set {H \mid \relcomp S H}$ form a partition of $S$.
Hence by definition, $T$ is not connected.
This contradicts our assumption.
Hence, by Proof by Contradiction, such $H$ does not exist.
$\Box$


Necessary Condition
Let there exist no non-empty proper subset of $S$ which is clopen in $T$.
Aiming for a contradiction, suppose $T$ is not connected (disconnected).
By definition, there is a partition $\set {A \mid B}$ of $S$.
Then $\relcomp S A = B$ is open.
Hence by definition $A$ is closed.
Thus $A$ is clopen such that:

$\O \ne A \ne S$
But then by definition $A$ is a non-empty proper subset of $S$ which is clopen in $T$.
This contradicts our assumption.
Hence, by Proof by Contradiction, $T$ is connected.
$\blacksquare$





