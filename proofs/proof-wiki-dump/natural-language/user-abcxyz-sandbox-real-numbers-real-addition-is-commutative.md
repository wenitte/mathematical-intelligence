# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Real_Numbers/Real_Addition_is_Commutative



Theorem
Let $\R$ denote the set of real numbers.
Let $+$ denote addition on $\R$.

Then $+$ is commutative on $\R$.


Proof 1
Let $\left({\R, +, \times, \le}\right)$ denote the real numbers, as axiomatically defined as a Dedekind complete totally ordered field.
By the field axioms, $+$ is commutative on $\R$.
$\blacksquare$


Proof 2
Let $\R$ denote the set of real numbers, as constructed from Cauchy sequences.
Let $+$ denote addition on $\R$.

From Rational Addition is Commutative, it directly follows that $+$ is commutative on $\R$.
$\blacksquare$


Proof 3
Let $\R$ denote the set of real numbers, as constructed from Dedekind cuts.
Let $+$ denote addition on $\R$.

From Rational Addition is Commutative, it directly follows that $+$ is commutative on $\R$.
$\blacksquare$


Proof 4
Let $\left({\R, \le}\right)$ denote the ordered set of real numbers, as defined as the Dedekind completion of the rational numbers.
Let $+$ denote addition on $\R$.

Let $\left({\left({\R, \le}\right), \phi}\right)$ be the Dedekind completion of the ordered set $\left({\Q, \le}\right)$ of rational numbers.
Then, for all $x, y \in \R$:














\(\ds x + y\)

\(=\)







\(\ds \sup {\left\{{\phi \left({p}\right): \phi \left({p}\right) \le x}\right\}} + \sup {\left\{{\phi \left({q}\right): \phi \left({q}\right) \le y}\right\}}\)





by Characterization of Dedekind Completion














\(\ds \)

\(=\)







\(\ds \sup {\left\{{\phi \left({p}\right) + \phi \left({q}\right): \phi \left({p}\right) \le x, \, \phi \left({q}\right) \le y}\right\}}\)





by Supremum of Subset Product in Ordered Group














\(\ds \)

\(=\)







\(\ds \sup {\left\{{\phi \left({p + q}\right): \phi \left({p}\right) \le x, \, \phi \left({q}\right) \le y}\right\}}\)





because $\phi$ is a group homomorphism from $\left({\Q, +}\right)$ to $\left({\R, +}\right)$



The result follows from Rational Addition is Commutative.
$\blacksquare$





