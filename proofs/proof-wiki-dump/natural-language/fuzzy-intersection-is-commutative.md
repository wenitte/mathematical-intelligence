# 

Source: https://proofwiki.org/wiki/Fuzzy_Intersection_is_Commutative



Theorem
Fuzzy intersection is commutative.


Proof
Let $\textbf A = \struct{A, \mu_A}$ and $\textbf B = \struct{B, \mu_B}$ be fuzzy sets.

Proving Domain Equality
By the definition of fuzzy intersection the domain of $\textbf A \cap \textbf B$ is:

$A \cap B$
Similarly the domain of $\textbf B \cap \textbf A$ is:

$B \cap A$
By Intersection is Commutative:

$A \cap B = B \cap A$
Hence their domains are equal.
$\Box$


Proving Membership Function Equality
Proving Form Equality
By the definition of fuzzy intersection the membership function of $\textbf A \cap \textbf B$ is of the form:

$\mu:A \cap B \to \closedint {0} {1}$
Similarly, the membership function of $\textbf B \cap \textbf A$ is of the form:

$\mu:B \cap A \to \closedint {0} {1}$
By Intersection is Commutative this is the same as:

$\mu:A \cap B \to \closedint {0} {1}$
Hence the membership functions are of the same form.


Proving Rule Equality









\(\ds \forall x \in A \cap B: \, \)



\(\ds \map {\mu_{A \mathop \cap B} } x\)

\(=\)







\(\ds \map \min {\map {\mu_A} x, \map {\mu_B} x}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall x \in B \cap A: \, \)



\(\ds \map {\mu_{B \mathop \cap A} } x\)

\(=\)







\(\ds \map \min {\map {\mu_A} x, \map {\mu_B} x}\)





Intersection is Commutative








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall x \in B \cap A: \, \)



\(\ds \map {\mu_{B \mathop \cap A} } x\)

\(=\)







\(\ds \map \min {\map {\mu_B} x, \map {\mu_A} x}\)





Min Operation is Commutative



Hence the membership functions have the same rule.
$\blacksquare$





