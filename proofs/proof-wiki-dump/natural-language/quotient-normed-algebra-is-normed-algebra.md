# 

Source: https://proofwiki.org/wiki/Quotient_Normed_Algebra_is_Normed_Algebra

Theorem
Let $\struct {R, \norm {\, \cdot \,}_R}$ be a normed division ring. 
Let $\struct {A, \norm {\, \cdot \,} }$ be a normed algebra.
Let $I$ be a closed ideal of $A$.
Let $A/I$ be the quotient algebra of $A$ modulo $I$.
Let $\norm {\, \cdot \,}_{A/I}$ be the quotient norm.

Then $\struct {A/I, \norm {\, \cdot \,}_{A/I} }$ is a normed algebra.


Proof
Since $I$ is a closed linear subspace of $A$, Quotient Norm is Norm shows that $\struct {A/I, \norm {\, \cdot \,}_{A/I} }$ is a normed vector space.
It remains to show that for $a, b \in A$ we have:

$\norm {a b + I}_{A/I} \le \norm {a + I}_{A/I} \norm {b + I}_{A/I}$
Let $\epsilon > 0$.
By the definition of the quotient norm, there exists $a', b' \in I$ such that:

$\norm {a + a'}_{A/I} < \epsilon + \norm {a + I}_{A/I}$
and:

$\norm {b + b'}_{A/I} < \epsilon + \norm {b + I}_{A/I}$
We then have:














\(\ds \norm {a b + a' b + a b' + a' b'}\)

\(=\)







\(\ds \norm {\paren {a + a'} \paren {b + b'} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {a + a'} \paren {b + b'}\)





Definition of Norm on Algebra














\(\ds \)

\(<\)







\(\ds \paren {\epsilon + \norm {a + I}_{A/I} } \paren {\epsilon + \norm {b + I}_{A/I} }\)









Since $I$ is an ideal, we have:

$a' b + a b' + a' b' \in I$
Hence we have:

$\ds \norm {a b + I}_{A/I} = \inf_{i \mathop \in I} \norm {a b + i} < \paren {\epsilon + \norm {a + I}_{A/I} } \paren {\epsilon + \norm {b + I}_{A/I} }$
Taking $\epsilon \to 0^+$, we obtain:

$\norm {a b + I}_{A/I} \le \norm {a + I}_{A/I} \norm {b + I}_{A/I}$
So $\norm {\, \cdot \,}_{A/I}$ is an algebra norm on $A/I$. 
So $\struct {A/I, \norm {\, \cdot \,}_{A/I} }$ is a normed algebra.
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $1.1$: Banach Algebras: Theorem $1.1.1$




