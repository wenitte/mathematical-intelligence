# 

Source: https://proofwiki.org/wiki/Congruence_Modulo_Power_of_p_as_Linear_Combination_of_Congruences_Modulo_p



Theorem
Let $p$ be a prime number.
Let $S = \set {a_1, a_2, \ldots, a_p}$ be a complete residue system modulo $p$.

Then for all integers $n \in \Z$ and non-negative integer $s \in \Z_{\ge 0}$, there exists a congruence of the form:

$n \equiv \ds \sum_{j \mathop = 0}^s b_j p^j \pmod {p^{s + 1} }$
where $b_j \in S$.


Proof
Proof by induction on $s$:

Basis for the Induction
For $s = 0$, we apply the definition of a complete residue system modulo $p$:

$\forall n \in \Z: \exists a_i \in S: n \equiv a_i \pmod p$
This is our base case.


Induction Hypothesis
This is our induction hypothesis:

For some $k \in \Z_{\ge 0}$, for all integers $n \in \Z$, there exists a congruence of the form:
$n \equiv \ds \sum_{j \mathop = 0}^k b_j p^j \pmod {p^{k + 1} }$
It is to be demonstrated that:

For all integers $n \in \Z$, there exists a congruence of the form:
$n \equiv \ds \sum_{j \mathop = 0}^{k + 1} b_j p^j \pmod {p^{k + 2} }$


Induction Step
This is our induction step:
From $n \equiv \ds \sum_{j \mathop = 0}^k b_j p^j \pmod {p^{k + 1} }$ we have:

$\exists q \in \Z: n = \ds \sum_{j \mathop = 0}^k b_j p^j + q p^{k + 1}$
From the definition of a complete residue system modulo $p$:

$\exists a_i \in S: q \equiv a_i \pmod p$
This gives:

$\exists r \in \Z: q = a_i + r p$

Substituting this to the original equation we have:














\(\ds n\)

\(=\)







\(\ds \sum_{j \mathop = 0}^k b_j p^j + \paren {a_i + r p} p^{k + 1}\)




















\(\ds \)

\(=\)







\(\ds a_i p^{k + 1} + \sum_{j \mathop = 0}^k b_j p^j + r p^{k + 2}\)




















\(\ds \)

\(\equiv\)







\(\ds a_i p^{k + 1} + \sum_{j \mathop = 0}^k b_j p^j\)

\(\ds \pmod {p^{k + 2} }\)







This shows that $n$ can be expressed as the form:

$n \equiv \ds \sum_{j \mathop = 0}^{k + 1} b_j p^j \pmod {p^{k + 2} }$

By the Principle of Mathematical Induction, the theorem is true for any $s$.
Note that in the proof above, we did not use the fact that $p$ is a prime number.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-2}$ Residue Systems: Exercise $3$




