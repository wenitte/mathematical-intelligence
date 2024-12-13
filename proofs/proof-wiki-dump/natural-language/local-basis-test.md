# 

Source: https://proofwiki.org/wiki/Local_Basis_Test



Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $x \in S$.
Let $\BB$ be a local basis for $x$ in $\struct {S, \tau}$.
Let $\CC$ be a set of open neighborhoods of $x$.
Then:

$\CC$ is a local basis if and only if:
$\forall B \in \BB \implies \exists C \in \CC: C \subseteq B$


Proof
Necessary Condition
Let $\CC$ be a local basis.
Let $B \in \BB$.
Since $\BB$ is a local basis, by the definition of a local basis then $B$ is open.
Since $\CC$ is a local basis, by the definition of a local basis then:

$\exists C \in \CC : C\subseteq B$.
$\Box$


Sufficient Condition
Let $\CC$ satisfy:

$\forall B \in \BB \implies \exists C \in \CC: C\subseteq B$

Let $U \in \tau$ and $x \in U$.
By the definition of a local basis then:

$\exists B \in \BB : B\subseteq U$
By the assumption then:

$\exists C \in \CC: C\subseteq B \subseteq U$
By the definition of a local basis then $\CC$ is a local basis.
$\blacksquare$





