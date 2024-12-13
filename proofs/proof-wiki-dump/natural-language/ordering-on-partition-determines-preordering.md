# 

Source: https://proofwiki.org/wiki/Ordering_on_Partition_Determines_Preordering



Theorem
Let $S$ be a set.
Let $\PP$ be a partition of $S$.
Let $\phi: S \to \PP$ be the quotient mapping.
Let $\preceq$ be a ordering of $\PP$.
Define a relation $\precsim$ on $S$ by letting $p \precsim q$ if and only if:

$\map \phi p \preceq \map \phi q$

Then:

$\precsim$ is a preordering on $S$.
$\precsim$ is the only preordering on $S$ that induces the $\preceq$ ordering on $\PP$.


Proof
To show that $\precsim$ is a preordering we must show that it is reflexive and transitive.

Reflexive
Let $p \in S$.
Then $\map \phi p = \map \phi p$.
Since $\preceq$ is an ordering it is reflexive.
Thus $\map \phi p \preceq \map \phi p$.
By the definition of $\precsim$, $p \precsim p$.
As this holds for all $p \in S$, $\precsim$ is reflexive.
$\Box$


Transitive
Let $p, q, r \in S$.
Suppose that $p \precsim q$ and $q \precsim r$.
By the definition of $\precsim$:

$\map \phi p \preceq \map \phi q$
$\map \phi q \preceq \map \phi r$
Since $\preceq$ is an ordering, it is transitive, so:

$\map \phi p \preceq \map \phi r$
Thus by the definition of $\precsim$, $p \precsim r$.
As this holds for all such $p$, $q$, and $r$, $\precsim$ is transitive.
$\Box$


$\precsim$ induces the $\preceq$ ordering on $\PP$
Let $P, Q \in P$.
First suppose that $P \preceq Q$.
Let $p \in P$ and let $q \in Q$.
By the definition of quotient mapping:

$\map \phi p = P$ and $\map \phi q = Q$.
Thus $\map \phi p \preceq \map \phi q$.
So by the definition of $\precsim$:

$p \precsim q$

Suppose instead that for some $p \in P$ and $q \in Q$, $p \precsim q$.
Then by the definition of $\precsim$:

$\map \phi p \preceq \map \phi q$
By the definition of quotient mapping:

$\map \phi p = P$ and $\map \phi q = Q$.
Thus $P \preceq Q$.
$\Box$


$\struct {\PP, \preceq}$ is the Antisymmetric Quotient of $\struct {S, \precsim}$
Let $\sim$ be the equivalence relation on $S$ induced by $\precsim$.
First we show that $\PP = S / {\sim}$.
As both $\PP$ and $S/ {\sim}$ are partitions of $S$, we need only show that for $p, q \in S$:

$\map \phi p = \map \phi q \iff p \sim q$
First suppose that $p \sim q$.
By the definition of $\sim$:

$p \precsim q$ and $q \precsim p$.
Then by the definition of $\precsim$:

$\map \phi p \preceq \map \phi q$
$\map \phi q \preceq \map \phi p$
Since $\preceq$ is an ordering, and hence antisymmetric:

$\map \phi p = \map \phi q$

Suppose instead that $\map \phi p = \map \phi q$.
Since $\preceq$ is reflexive:

$\map \phi p \preceq \map \phi q$
$\map \phi q \preceq \map \phi p$
By the definition of $\precsim$:

$p \precsim q$ and $q \precsim p$.
By the definition of $\sim$:

$p \sim q$

Now we must show that for $P, Q \in \PP$:

$P \preceq Q \iff \exists p \in P: \exists q \in Q: p \precsim q$
Suppose that $P \preceq Q$.
Let $p \in P$ and $q \in Q$.
Then $\map \phi p = P$ and $\map \phi q = Q$, so $p \precsim q$ by the definition of $\precsim$.
Suppose instead that $\exists p \in P: \exists q \in Q: p \precsim q$.
Then by the definition of $\precsim$, $P \preceq Q$.
$\Box$


$\precsim$ is Unique
Let $\precsim'$ be a preordering such that the antisymmetric quotient of $\struct {S, \precsim'}$ is $\struct {P, \preceq}$.
Let $p, q \in S$.
First suppose that $p \precsim' q$.
Then $\map \phi p \preceq \map \phi q$ by the definition of antisymmetric quotient.
Thus $p \precsim q$ by the definition of $\precsim$.
Suppose instead that $p \precsim q$.
Then $\map \phi p \preceq \map \phi q$ by the definition of $\precsim$.
Thus $p \precsim' q$ by the definition of antisymmetric quotient.
$\blacksquare$





