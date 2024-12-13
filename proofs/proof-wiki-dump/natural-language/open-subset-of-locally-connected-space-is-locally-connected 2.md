# 

Source: https://proofwiki.org/wiki/Open_Subset_of_Locally_Connected_Space_is_Locally_Connected



Theorem
Let $T = \struct {S, \tau}$ be a locally connected topological space.
Let $U \subseteq S$ be open in $T$.

Then $U$ is locally connected.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma
Let $T = \struct {S, \tau}$ be a topological space.
Let $U$ be a connected set.
Let $A$ be a subset of $T$ such that $U \subseteq A$.
Let $\tau_A$ be the subspace topology on $A$ induced from $T$.
Then $U$ is connected in the topological subspace $\struct {A, \tau_A}$.
$\Box$

Let $\tau_U$ denotes the subspace topology on $U$ induced by $\tau$.
That is, $\tau_U = \set {\OO \cap U: \OO \in \tau}$.
To show that $\struct {U, \tau_U}$ is a locally connected topological space, we must prove that each point $x\in U$ has a local basis consisting of connected elements of $\tau_U$.

Let $x$ be an element of $U$.
Since $T$ is locally connected, there exists a local basis of $x$ in $T$ consisting of connected sets.
Let $\widetilde \BB = \set {\OO_\alpha: \alpha \in \II}$ be such a local basis, where $\II$ is an indexing set.
That is, for each $\alpha \in \II$:

$\OO_\alpha$ is connected
$\OO_\alpha\in \tau$, and
$\OO_\alpha$ contains $x$.
Let $\BB = \set {\OO_\alpha \cap U: \alpha \in \II}$. 
We claim that $\BB$ gives a local basis for $x$ considered as an element of the topological space $\struct {U, \tau_U}$ (though $\BB$ need not consist of connected sets.)
To see this, note that for each $\alpha \in \II$, $\OO_\alpha \cap U$ is open in $U$ by definition of the subspace topology on $U$. 
Note also that since $x \in U$ and $x \in \OO_\alpha$:

$x \in U \cap \OO_\alpha$,
so $\BB$ is a family of open sets containing $x$. 
To show $\BB$ is a local basis, it remains to prove that any element of $\tau_U$ containing $x$ also contains an element of $\BB$. 
Let $A \in \tau_U$ be such that $x \in A$. 
Since each element of $\tau_U$ is of the form $\OO \cap U$ where $\OO \in \tau$, there exists $V \in \tau$ such that:

$A = V \cap U$
Since $\tau$ is a topology and $V$ and $U$ are both in $\tau$:

$A \in \tau$
as well. 
From the fact that $\widetilde \BB$ is a local basis for $x$ in $\struct {T, \tau}$, we may therefore find an element $\alpha \in \II$ such that

$\OO_\alpha \subseteq A$
By Set Intersection Preserves Subsets/Corollary:

$\OO_\alpha \cap U \subseteq A \cap U$
From Intersection with Subset is Subset, since $A \subseteq U$:

$A \cap U = A$
Therefore 

$\OO_\alpha \cap U \subseteq A$
as required.

We now use the local basis $\BB$ for $x$ to produce a local basis for $x$ consisting of connected sets.
Let $A \in \BB$.
Since $A$ is a neighborhood of $x$ and $\widetilde B$ is a local basis for $x$ considered as an element of the topological space $\struct {T, \tau}$, there exists an element $\alpha \in \II$ such that $\OO_\alpha \in \widetilde B$ satisfies

$\OO_\alpha \subseteq A$.
Using the Axiom of Choice, we may therefore define a function $\phi : \BB \to \II$ such that

$\OO_{\map \phi A} \subseteq A$.
We claim that $\map \phi \BB$ gives a local basis for $x$ in $U$ consisting of connected sets.
First, note that for all $A \in \BB$,

$\map \phi A \in \tau$
and

$\map \phi A \subseteq A \subseteq U$.
It follows from the definition of the subspace topology $\tau_U$ that

$\map \phi A = \map \phi A \cap U \in \tau_U$
Second, note that since $\map \phi A$ is connected in $T$ and $\map \phi A \subseteq U$, $\map \phi A$ is also connected when considered as a subset of the topological space $\struct {U, \tau_U}$ by our lemma above.
Finally, note that for any element $V\in \tau_U$ such that $x \in V$, since $\BB$ is a local basis for $x$ considered as an element of $\struct {U, \tau_U}$, there exists $A \in \BB$ such that

$A \subseteq V$
Since $\map \phi A \subseteq A$, it follows that

$\map \phi A \subseteq V$
$\map \phi \BB$ is therefore a local basis for $x$ in the topological space $\struct {U, \tau_U}$ consisting of connected sets as required.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Also see
Open Subset of Locally Path-Connected Space is Locally Path-Connected




