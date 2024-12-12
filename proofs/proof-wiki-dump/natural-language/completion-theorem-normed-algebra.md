# 

Source: https://proofwiki.org/wiki/Completion_Theorem_(Normed_Algebra)



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {A, \norm {\, \cdot \,} }$ be a normed algebra over $\GF$.

Then there exists a Banach algebra $\struct {\widetilde A, \widetilde {\norm {\, \cdot \,} } }$ and a isometric algebra homomorphism $\phi : A \to \widetilde A$ such that $\phi \sqbrk A$ is dense in $\widetilde A$.
This Banach algebra $\struct {\widetilde A, \widetilde {\norm {\, \cdot \,} } }$ is unique up to isometric algebra isomorphism.
Further, if $\struct {A, \norm {\, \cdot \,} }$ is unital, then so is $\struct {\widetilde A, \widetilde {\norm {\, \cdot \,} } }$.


Proof
Proof of Existence
Let $\struct {A^{\ast \ast}, \norm {\, \cdot \,}_{A^{\ast \ast} } }$ be the second normed dual of $\struct {A, \norm {\, \cdot \,} }$.
From Normed Dual Space is Banach Space, $\struct {A^{\ast \ast}, \norm {\, \cdot \,}_{A^{\ast \ast} } }$ is a Banach space. 
Let $\phi : A \to A^{\ast \ast}$ be the evaluation transformation.
Let $\widetilde A = \map \cl {\phi \sqbrk A}$, where $\cl$ denotes the closure in $\struct {A^{\ast \ast}, \norm {\, \cdot \,}_{A^{\ast \ast} } }$.
From Completion Theorem (Normed Vector Space), $\phi$ is a linear isometry and $\phi \sqbrk A$ is dense in $\widetilde A$.
It remains to assign a multiplicative structure to $\widetilde A$ and show that with this structure both makes $\widetilde A$ a Banach algebra and $\phi$ an algebra homomorphism.
Let $a, b \in \map \cl {\phi \sqbrk A}$. 
From Point in Closure of Subset of Metric Space iff Limit of Sequence, there exists sequences $\sequence {a_n}_{n \in \N}$ and $\sequence {b_n}_{n \in \N}$ in $A$ such that:

$\map \phi {a_n} \to a$
and:

$\map \phi {b_n} \to b$
We define:

$\ds a \circ b = \lim_{n \mathop \to \infty} \map \phi {a_n b_n}$

We first verify that $\circ$ is well-defined.
Since $\phi$ is a linear isometry, we have:

$\widetilde {\norm {\map \phi {a_n} - \map \phi {a_m} } } = \widetilde {\norm {\map \phi {a_n - a_m} } } = \norm {a_n - a_m}$
and similarly:
$\widetilde {\norm {\map \phi {b_n} - \map \phi {b_m} } } = \norm {b_n - b_m}$
From Convergent Sequence is Cauchy Sequence, both $\sequence {\map \phi {a_n} }_{n \mathop \in \N}$ and $\sequence {\map \phi {b_n} }_{n \mathop \in \N}$ are Cauchy in $\struct {\widetilde A, \widetilde {\norm {\, \cdot \,} } }$.
Hence $\sequence {a_n}_{n \mathop \in \N}$ and $\sequence {b_n}_{n \mathop \in \N}$ are Cauchy in $\struct {\widetilde A, \widetilde {\norm {\, \cdot \,} } }$.
From Product of Cauchy Sequences in Normed Algebra is Cauchy, we have: 

$\sequence {a_n b_n}_{n \mathop \in \N}$ is Cauchy.
Since $\phi$ is a linear isometry again, we have:

$\sequence {\map \phi {a_n b_n} }_{n \mathop \in \N}$ is Cauchy.
Since $\struct {\widetilde A, \widetilde {\norm {\, \cdot \,} } }$ is a Banach space as in Completion Theorem (Normed Vector Space), we have that:

$\sequence {\map \phi {a_n b_n} }_{n \mathop \in \N}$ is convergent.
Hence:

$\ds \lim_{n \mathop \in \N} \map \phi {a_n b_n}$ is well-defined.
We now show that the value of:

$\ds \lim_{n \mathop \in \N} \map \phi {a_n b_n}$
is independent of the choice of sequences $\sequence {a_n}_{n \mathop \in \N}$ and $\sequence {b_n}_{n \mathop \in \N}$.
Let $\sequence {a_n}_{n \mathop \in \N}$, $\sequence {a_n'}_{n \mathop \in \N}$, $\sequence {b_n}_{n \mathop \in \N}$ and $\sequence {b_n'}_{n \mathop \in \N}$ be such that:

$\ds \lim_{n \mathop \to \infty} \map \phi {a_n} = \lim_{n \mathop \to \infty} \map \phi {a_n'} = a$
and:

$\ds \lim_{n \mathop \to \infty} \map \phi {b_n} = \lim_{n \mathop \to \infty} \map \phi {b_n'} = b$
Hence, we have from Sum Rule for Sequence in Normed Vector Space:

$\widetilde {\norm {\map \phi {a_n} - \map \phi {a_n'} } } \to 0$
and:

$\widetilde {\norm {\map \phi {b_n} - \map \phi {b_n'} } } \to 0$
Since $\phi$ is a linear isometry, we again obtain:

$\norm {a_n - a_n'} \to 0$
and:

$\norm {b_n - b_n'} \to 0$
Recall that $\sequence {a_n}_{n \mathop \in \N}$, $\sequence {b_n}_{n \mathop \in \N}$, $\sequence {a_n'}_{n \mathop \in \N}$ and $\sequence {b_n'}_{n \mathop \in \N}$ are also Cauchy.
Hence from Cauchy Sequence is Bounded: Normed Vector Space:

there exists $M > 0$ such that $\max \set {\norm {a_n}, \norm {b_n}, \norm {a_n'}, \norm {b_n'} } \le M$ for each $n \in \N$.
Let:

$\ds L_1 = \lim_{n \mathop \in \N} \map \phi {a_n b_n}$
and:

$\ds L_2 = \lim_{n \mathop \in \N} \map \phi {a_n' b_n'}$
We show that $L_1 = L_2$.
We have:














\(\ds \norm {a_n b_n - a_n' b_n'}\)

\(=\)







\(\ds \norm {a_n b_n - a_n' b_n + a_n' b_n - a_n' b_n'}\)




















\(\ds \)

\(=\)







\(\ds \norm {b_n \paren {a_n - a_n'} + a_n' \paren {b_n - b_n'} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {b_n} \norm {a_n - a_n'} + \norm {a_n'} \norm {b_n - b_n'}\)





Norm Axiom $\text N 3$: Triangle Inequality, Definition of Norm on Algebra














\(\ds \)

\(\le\)







\(\ds M \paren {\norm {a_n - a_n'} + \norm {b_n - b_n'} }\)




















\(\ds \)

\(\to\)







\(\ds 0\)









Hence, since $\phi$ is a linear isometry, we have:

$\widetilde {\norm {\map \phi {a_n b_n} - \map \phi {a_n' b_n'} } } \to 0$
That is, from Norm is Continuous, we have:

$\widetilde {\norm {L_1 - L_2} } = 0$
Hence, from Norm Axiom $\text N 2$: Positive Homogeneity:

$L_1 = L_2$

We now show that $\circ$ is bilinear.
We show that:

$a \circ \paren {b + \lambda c} = a \circ b + \lambda \paren {a \circ c}$ for $a, b, c \in \widetilde A$ and $\lambda \in \GF$.
The fact that:

$\paren {a + \lambda b} \circ c = a \circ c + \lambda \paren {b \circ c}$
can be proven virtually identically.
Let $a, b, c \in \widetilde A$ and $\lambda \in \GF$.
Let $\sequence {a_n}_{n \mathop \in \N}$, $\sequence {b_n}_{n \mathop \in \N}$ and $\sequence {c_n}_{n \mathop \in \N}$ be sequences with:

$\map \phi {a_n} \to a$, $\map \phi {b_n} \to b$ and $\map \phi {c_n} \to c$.
From Linear Combination of Convergent Sequences in Topological Vector Space is Convergent, we have:

$\map \phi {b_n} + \lambda \map \phi {c_n} = \map \phi {b_n + \lambda c_n} \to b + \lambda c$
Then, we have:














\(\ds a \circ \paren {b + \lambda c}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \phi {a_n \paren {b_n + \lambda c_n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \phi {a_n b_n + \lambda b_n c_n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\map \phi {a_n b_n} + \lambda \map \phi {b_n c_n} }\)





$\phi$ is linear














\(\ds \)

\(=\)







\(\ds a \circ b + \lambda \paren {b \circ c}\)





Linear Combination of Convergent Sequences in Topological Vector Space is Convergent



We conclude that $\struct {\widetilde A, \circ}$ is an algebra.

We now show that $\phi$ is an algebra homomorphism.
Let $a, b \in A$ so that $\map \phi a, \map \phi b \in \phi \sqbrk A$.
From Constant Sequence in Topological Space Converges, we have:

$\map \phi a \to \map \phi a$
and:

$\map \phi b \to \map \phi b$
Hence from our definition of $\circ$ with $a_n = a$ and $b_n = b$ for all $n \in \N$, we obtain:

$\ds \map \phi a \circ \map \phi b = \lim_{n \mathop \to \infty} \map \phi {a b} = \map \phi {a b}$
for each $a, b \in A$. 
That is, $\phi$ is an algebra homomorphism.

We now show that $\widetilde {\norm {\, \cdot \,} }$ is a algebra norm on $\widetilde A$.
Let $a, b \in \widetilde A$.
Then there exists sequences $\sequence {a_n}_{n \mathop \in \N}$ and $\sequence {b_n}_{n \mathop \in \N}$ in $A$ such that:

$\map \phi {a_n} \to a$
and:

$\map \phi {b_n} \to b$
Since $\phi$ is a linear isometry and $\norm {\, \cdot \,}$ is a norm on $A$, we have:














\(\ds \widetilde {\norm {\map \phi {a_n b_n} } }\)

\(=\)







\(\ds \norm {a_n b_n}\)





since $\phi$ is a linear isometry














\(\ds \)

\(\le\)







\(\ds \norm {a_n} \norm {b_n}\)





Definition of Norm on Algebra














\(\ds \)

\(=\)







\(\ds \widetilde {\norm {\map \phi {a_n} } } \widetilde {\norm {\map \phi {b_n} } }\)





since $\phi$ is a linear isometry



Taking $n \to \infty$ and using Norm is Continuous, we have:

$\widetilde {\norm {a \circ b} } \le \widetilde {\norm a} \widetilde {\norm b}$
Recall again that $\struct {\widetilde A, \widetilde {\norm {\, \cdot \,} } }$ is a Banach space. 
Hence $\struct {\widetilde A, \widetilde {\norm {\, \cdot \,} } }$ is a Banach algebra.

Finally, we assure ourselves that if $A$ is unital in the sense of a normed algebra, then so is $\struct {\widetilde A, \widetilde {\norm {\, \cdot \,} } }$.
Suppose that $A$ is unital in the sense of a normed algebra.
Then the identity element ${\mathbf 1}_A$ of $A$ satisfies:

$\norm { {\mathbf 1}_A} = 1$
We show that $\map \phi { {\mathbf 1}_A}$ is an identity element for $\widetilde A$.
Since $\phi$ is an isometry, we have:

$\widetilde {\norm {\map \phi { {\mathbf 1}_A} } } = 1$
Now, we have, for $a \in A$ and an appropriate sequence $\sequence {a_n}_{n \mathop \in \N}$:














\(\ds \map \phi { {\mathbf 1}_A} \circ a\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \phi { {\mathbf 1}_A a_n}\)





by definition of $\circ$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \phi {a_n}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds a\)





by choice of $\sequence {a_n}_{n \mathop \in \N}$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \phi {a_n}\)





by choice of $\sequence {a_n}_{n \mathop \in \N}$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \phi {a_n {\mathbf 1}_A}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds a \circ \map \phi { {\mathbf 1}_A}\)





by definition of $\circ$



The proof of existence is complete. 
$\Box$


Proof of Uniqueness
Suppose that there exists Banach algebras $\struct {A_1, \norm {\, \cdot \,}_1}$, $\struct {A_1, \norm {\, \cdot \,}_2}$ and isometric algebra homomorphisms $\phi_1 : A \to A_1$, $\phi_2 : A \to A_2$ such that $\phi_1 \sqbrk A$ and $\phi_2 \sqbrk A$ are dense in $A_1$ and $A_2$ respectively. 
From Inverse of Linear Isometry is Linear Isometry:

$\phi_1^{-1} : \phi_1 \sqbrk A \to A$ is an isometric isomorphism.
Hence from Composition of Linear Isometries is Linear Isometry and Composite of Bijections is Bijection, $\phi_2 \circ \phi_1^{-1} : \phi_1 \sqbrk X \to \phi_2 \sqbrk X$ is an isometric isomorphism.
From Composition of Algebra Homomorphisms is Algebra Homomorphism, $\phi_2 \circ \phi_1^{-1} : \phi_1 \sqbrk X \to \phi_2 \sqbrk X$ is an algebra homomorphism. 
Since $\phi_1 \sqbrk A$ is dense in $A_1$ and $\struct {A_2, \norm {\, \cdot \,}_2}$ is a Banach space, we obtain:

there exists a unique bounded linear transformation $\psi : A_1 \to A_2$ extending $\phi_2 \circ \phi_1^{-1}$
from Uniformly Continuous Function to Complete Metric Space has Unique Continuous Extension to Closure of Domain.
As shown in Completion Theorem (Metric Space): Lemma $4$, $\psi$ is an isometric isomorphism.
We just need to reassure ourselves that $\psi$ is an algebra homomorphism. 
Let $a, b \in A_1$. 
Let $\sequence {a_n}_{n \mathop \in \N}$ and $\sequence {b_n}_{n \mathop \in \N}$ in $\phi_1 \sqbrk A$ be such that $a_n \to a$ and $b_n \to b$. 
We have: 














\(\ds \map \psi {a b}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \psi {a_n b_n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \psi {a_n} \map \psi {b_n}\)





$\psi$ is an algebra homomorphism restricted to $\phi_1 \sqbrk A$














\(\ds \)

\(=\)







\(\ds \map \psi a \map \psi b\)





$\psi$ is an isometry



$\blacksquare$





