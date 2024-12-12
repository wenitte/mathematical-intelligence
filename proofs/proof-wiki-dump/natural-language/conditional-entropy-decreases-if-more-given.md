# 

Source: https://proofwiki.org/wiki/Conditional_Entropy_Decreases_if_More_Given



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\AA, \CC, \DD \subseteq \Sigma$ be finite sub-$\sigma$-algebras.

Then:

$\CC \subseteq \DD \implies \map H {\AA \mid \CC} \ge \map H {\AA \mid \DD}$
where:

$\map H {\cdot \mid \cdot}$ denotes the conditional entropy


Proof
Consider the generated finite partitions:

$\xi := \map \xi \AA$
$\eta := \map \xi \CC$
$\gamma := \map \xi \DD$
By Generating Partition Preserves Order, $\CC \subseteq \DD$ implies:

$\eta \le \gamma$
where $\le$ denotes the refinement.
By Definition of Conditional Entropy of Finite Sub-Sigma-Algebra, we shall show:

$\map H {\xi \mid \eta} \ge \map H {\xi \mid \gamma}$

Recall that $\eta \le \gamma$ implies:

$\forall B \in \eta, \forall D \in \gamma \implies D \subseteq B \; \text{or} \; B \cap D = \O$

In particular, we have:

$(1): \quad \forall B \in \eta, \forall D \in \gamma: \map \Pr {B \cap D} = \begin{cases} \map \Pr D &: D \subseteq B \\ 0 &: B \cap D = \O \end{cases}$

Thus, for all $A \in \xi$ and $B \in \gamma$ such that $\map \Pr B > 0$:














\(\ds \dfrac {\map \Pr {A \cap B} } {\map \Pr B}\)

\(=\)







\(\ds \dfrac 1 {\map \Pr B} \sum_{\substack {D \mathop \in \gamma \\ D \mathop \subseteq B} } \map \Pr {A \cap D}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\map \Pr B} \sum_{\substack {D \mathop \in \gamma \\ \map \Pr D > 0} } \dfrac {\map \Pr {B \cap D} } {\map \Pr D} \map \Pr {A \cap D}\)





apply $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{\substack {D \mathop \in \gamma \\ \map \Pr D > 0} } \dfrac {\map \Pr {B \cap D} } {\map \Pr B} \dfrac {\map \Pr {A \cap D} } {\map \Pr D}\)









The function $\phi$ used in Definition of Conditional Entropy of Finite Partitions is concave since the second derivative is negative:

$\forall x > 0 : \map {\phi ' '} x = -\dfrac 1 x < 0$
Note that the concavity holds including $x = 0$, since $\phi$ is continuous there.

So we obtain:




\(\text {(2)}: \quad\)









\(\ds \map \phi {\dfrac {\map \Pr {A \cap B} } {\map \Pr B} }\)

\(\ge\)







\(\ds \sum_{\substack {D \mathop \in \gamma \\ \map \Pr D > 0} } \dfrac {\map \Pr {B \cap D} } {\map \Pr B}  \map \phi {\dfrac {\map \Pr {A \cap D} } {\map \Pr D} }\)





Jensen's inequality














\(\ds \)

\(=\)







\(\ds \sum_{\substack {D \mathop \in \gamma \\ D \mathop \subseteq B \\ \map\Pr D > 0} } \dfrac {\map \Pr D} {\map \Pr B}  \map \phi {\dfrac {\map \Pr {A \cap D} } {\map \Pr D} }\)





apply $(1)$



Therefore:














\(\ds \map H {\xi \mid \eta}\)

\(=\)







\(\ds \sum_{\substack {B \mathop \in \eta \\ \map \Pr B \mathop > 0} } \map \Pr B \sum_{A \mathop \in \xi} \map \phi {\dfrac {\map \Pr {A \cap B} } {\map \Pr B} }\)





Definition of Conditional Entropy of Finite Partitions














\(\ds \)

\(\ge\)







\(\ds \sum_{\substack {B \mathop \in \eta \\ \map \Pr B \mathop > 0} } \map \Pr B \sum_{A \mathop \in \xi} \sum_{\substack {D \mathop \in \gamma \\ D \mathop \subseteq B \\ \map\Pr D > 0} } \dfrac {\map \Pr D} {\map \Pr B}  \map \phi {\dfrac {\map \Pr {A \cap D} } {\map \Pr D} }\)





substituting from $(2)$














\(\ds \)

\(=\)







\(\ds \sum_{\substack {B \mathop \in \eta \\ \map \Pr B \mathop > 0} } \sum_{\substack {D \mathop \in \gamma \\ D \mathop \subseteq B \\ \map\Pr D > 0} } \sum _{A \mathop \in \xi} \map \Pr D  \map \phi {\dfrac {\map \Pr {A \cap D} } {\map \Pr D} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\substack {D \mathop \in \gamma \\ \map\Pr D > 0} } \sum _{A \mathop \in \xi} \map \Pr D  \map \phi {\dfrac {\map \Pr {A \cap D} } {\map \Pr D} }\)





since $\eta \le \gamma$














\(\ds \)

\(=\)







\(\ds \map H {\xi \mid \gamma}\)





Definition of Conditional Entropy of Finite Partitions



$\blacksquare$


Corollary
$\map H \AA \ge \map H {\AA \mid \DD} $


Sources
1982: Peter Walters: An Introduction to Ergodic Theory $4.3$: Conditional Entropy




