# 

Source: https://proofwiki.org/wiki/Conditional_Entropy_of_Join_as_Sum



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\AA, \CC, \DD \subseteq \Sigma$ be finite sub-$\sigma$-algebras.

Then:

$\ds \map H {\AA \vee \CC \mid \DD} = \map H {\AA \mid \DD} + \map H {\CC \mid \AA \vee \DD} $
where:

$\map H {\cdot \mid \cdot}$ denotes the conditional entropy
$\vee$ denotes the join


Corollary 1
$\map H {\AA \vee \CC} = \map H {\AA} + \map H {\CC \mid \AA} $


Corollary 2
$\AA \subseteq \CC \implies \map H {\AA \mid \DD} \le \map H {\CC \mid \DD} $


Corollary 3
$\AA \subseteq \CC \implies \map H \AA \le \map H \CC $


Corollary 4
$\map H {\AA \vee \CC \mid \DD} \le \map H {\AA \mid \DD} + \map H {\CC \mid \DD}$


Corollary 5
$\map H {\AA \vee \CC} \le \map H \AA + \map H \CC $


Proof
Consider the generated finite partitions:

$\xi := \map \xi \AA$
$\eta := \map \xi \CC$
$\gamma := \map \xi \DD$
By Definition of Conditional Entropy of Finite Sub-Sigma-Algebra, we shall show:

$\map H {\xi \vee \eta \mid \gamma} = \map H {\xi \mid \gamma} + \map H {\eta \mid \xi \vee \gamma}$
Then:














\(\ds \map H {\xi \vee \eta \mid \gamma}\)

\(=\)







\(\ds \sum_{\substack {D \mathop \in \gamma \\ \map \Pr D \mathop > 0} } \map \Pr D \sum_{B \mathop \in \xi \vee \eta} \map \phi {\dfrac {\map \Pr {B \cap D} } {\map \Pr D} }\)





Definition of Conditional Entropy of Finite Partitions














\(\ds \)

\(=\)







\(\ds \sum_{\substack {D \mathop \in \gamma \\ \map \Pr D \mathop > 0} } \map \Pr D \sum_{\substack {A \mathop \in \xi \\ C \mathop \in \eta} } \map \phi {\dfrac {\map \Pr {A \cap C \cap D} } {\map \Pr D} }\)





Definition of Join of Finite Partitions














\(\ds \)

\(=\)







\(\ds - \sum_{\substack {\tuple {A, C, D} \mathop \in \xi \times \eta \times \gamma \\ \map \Pr {A \cap C \cap D} > 0 } } \map \Pr {A \cap C \cap D} \map \log {\dfrac {\map \Pr {A \cap C \cap D} } {\map \Pr D} }\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds - \sum_{\substack {\tuple {A, C, D} \mathop \in \xi \times \eta \times \gamma \\ \map \Pr {A \cap C \cap D} > 0 } } \map \Pr {A \cap C \cap D} \map \log { \dfrac {\map \Pr {A \cap C \cap D} } {\map \Pr {A \cap D} } \dfrac {\map \Pr {A \cap D} } {\map \Pr D } }\)




















\(\ds \)

\(=\)







\(\ds - \sum_{\substack {\tuple {A, C, D} \mathop \in \xi \times \eta \times \gamma \\ \map \Pr {A \cap C \cap D} > 0 } } \map \Pr {A \cap C \cap D} \map \log { \dfrac {\map \Pr {A \cap C \cap D} } {\map \Pr {A \cap D} } }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{\substack {\tuple {A, C, D} \mathop \in \xi\times\eta\times\gamma \\ \map \Pr {A \cap C \cap D} > 0 } } \map \Pr {A \cap C \cap D} \map \log { \dfrac {\map \Pr {A \cap D} } {\map \Pr D } }\)





Real Logarithm is Completely Additive














\(\ds \)

\(=\)







\(\ds \sum_{\substack {\tuple {A, C, D} \mathop \in \xi \times \eta \times \gamma \\ \map \Pr {A \cap C \cap D} > 0 } } \map \Pr {A \cap D} \map \phi { \dfrac {\map \Pr {A \cap C \cap D} } {\map \Pr {A \cap D} } }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{\substack {\tuple {A, C, D} \mathop \in \xi \times \eta \times \gamma \\ \map \Pr {A \cap C \cap D} > 0 } } \dfrac {\map \Pr {A \cap C \cap D} \map \Pr D} {\map \Pr {A \cap D} } \map \phi { \dfrac {\map \Pr {A \cap D} } {\map \Pr D } }\)





Definition of $\phi$














\(\ds \)

\(=:\)







\(\ds L + R\)









Now:














\(\ds L\)

\(=\)







\(\ds \sum_{\substack {\tuple {A, C, D} \mathop \in \xi \times \eta \times \gamma \\ \map \Pr {A \cap C \cap D} > 0 } } \map \Pr {A \cap D} \map \phi { \dfrac {\map \Pr {A \cap C \cap D} } {\map \Pr {A \cap D} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\substack {\tuple {A, D} \mathop \in \xi \times \gamma \\ \map \Pr {A \cap D} > 0 } } \map \Pr {A \cap D} \sum_{C \in \eta} \map \phi { \dfrac {\map \Pr {A \cap C \cap D} } {\map \Pr {A \cap D} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\substack {F \mathop \in \xi \vee \gamma \\ \map \Pr F > 0 } } \map \Pr F \sum_{C \mathop \in \eta} \map \phi { \dfrac {\map \Pr {C \cap F} } {\map \Pr F } }\)





Definition of Join of Finite Partitions














\(\ds \)

\(=\)







\(\ds \map H {\eta \mid \xi \vee \gamma}\)





Definition of Conditional Entropy of Finite Partitions



and:














\(\ds R\)

\(=\)







\(\ds \sum_{\substack {\tuple {A, C, D} \mathop \in \xi \times \eta \times \gamma \\ \map \Pr {A \cap C \cap D} > 0 } } \dfrac {\map \Pr {A \cap C \cap D} \map \Pr D} {\map \Pr {A \cap D} } \map \phi { \dfrac {\map \Pr {A \cap D} } {\map \Pr D } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\substack {\tuple {A, D} \mathop \in \xi \times \gamma \\ \map \Pr {A \cap D} > 0 } } \sum_{C \in \eta} \dfrac {\map \Pr {A \cap C \cap D} \map \Pr D} {\map \Pr {A \cap D} } \map \phi { \dfrac {\map \Pr {A \cap D} } {\map \Pr D } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\substack {A \mathop \in \xi \\ \map \Pr D > 0 } } \map \Pr D \sum_{C \mathop \in \eta} \map \phi { \dfrac {\map \Pr {A \cap D} } {\map \Pr D } }\)





$\ds \sum _{C \in \eta} \map \Pr {A \cap C \cap D} = \map \Pr {A \cap D}$














\(\ds \)

\(=\)







\(\ds \map H {\xi \mid \gamma}\)





Definition of Conditional Entropy of Finite Partitions



$\blacksquare$


Sources
1982: Peter Walters: An Introduction to Ergodic Theory $4.3$: Conditional Entropy




