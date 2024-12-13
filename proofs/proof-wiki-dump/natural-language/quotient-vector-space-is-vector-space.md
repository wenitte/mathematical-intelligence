# 

Source: https://proofwiki.org/wiki/Quotient_Vector_Space_is_Vector_Space



Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $N$ be a linear subspace of $X$.
Define: 

$X/N = \set {x + N : x \in X}$
where $x + N$ is the Minkowski sum of $x$ and $N$.
Define: 

$\paren {x + N} +_{X/N} \paren {y + N} = \paren {x + y} + N$
for $x, y \in X$, and:

$\alpha \circ_{X/N} {x + N} = \paren {\alpha x} + N$
for $\alpha \in K$ and $x \in X$. 

Then $\paren {X/N, +_{X/N}, \circ_{X/N} }_K$ is a vector space.


Proof
Lemma
Let $K$ be a field. 
Let $X$ be a vector space over $K$.
Let $N$ be a linear subspace of $X$.
Let $z \in N$.

Then: 

$z + N = N$
$\Box$

Vector Addition is Well-Defined
To show that $+_{X/N}$ is well-defined, we show that if $x, x', y, y' \in N$ are such that: 

$x + N = x' + N$
and:

$y + N = y' + N$
we have:

$\paren {x + y} + N = \paren {x' + y'} + N$
Since $x + N = x' + N$, we have:

$x' \in x + N$
and so there exists $z \in N$ such that $x + z = x'$. 
Then $z = x' - x$, and so $x' - x \in N$. 
Similarly, we have that $y' - y \in N$.
So we have $\paren {x' + y'} - \paren {x + y} \in N$, since $N$ is a linear subspace of $X$, so that: 

$N = \paren {x' + y'} - \paren {x + y} + N$
by the lemma.
So that: 

$\paren {x + y} + N = \paren {x' + y'} + N$
$\Box$

Scalar Multiplication is Well-Defined
Let $\alpha \in K$. 
Suppose that $x, x' \in N$ are such that: 

$x + N = x' + N$
We need to show that: 

$\alpha x + N = \alpha x' + N$
As argued in proving vector addition is well-defined, we have that $x' - x \in N$.
Since $N$ is a linear subspace of $X$, we have: 

$\alpha \paren {x' - x} = \alpha x' - \alpha x \in N$
So from the lemma, we have: 

$N = \alpha x' - \alpha x + N$
So that:

$\alpha x + N = \alpha x' + N$
$\Box$

Proof of Vector Space Axiom $(\text V 1)$: Commutativity
Let $\mathbf x, \mathbf y \in X/N$.
Then there exists $x, y \in N$ such that $\mathbf x = x + N$ and $\mathbf y = y + N$.
Then we have: 














\(\ds \mathbf x + \mathbf y\)

\(=\)







\(\ds \paren {x + N} + \paren {y + N}\)




















\(\ds \)

\(=\)







\(\ds \paren {x + y} + N\)




















\(\ds \)

\(=\)







\(\ds \paren {y + x} + N\)





using Vector Space Axiom $(\text V 1)$: Commutativity for $X$














\(\ds \)

\(=\)







\(\ds \paren {y + N} + \paren {x + N}\)




















\(\ds \)

\(=\)







\(\ds \mathbf y + \mathbf x\)









$\Box$

Proof of Vector Space Axiom $(\text V 2)$: Associativity
Let $\mathbf x, \mathbf y, \mathbf z \in X/N$.
Then there exists $x, y, z \in N$ such that $\mathbf x = x + N$, $\mathbf y = y + N$ and $\mathbf z = z + N$.
Then we have: 














\(\ds \paren {\mathbf x + \mathbf y} + \mathbf z\)

\(=\)







\(\ds \paren {\paren {x + N} + \paren {y + N} } + \paren {z + N}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x + y} + N} + \paren {z + N}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {x + y} + z} + N\)




















\(\ds \)

\(=\)







\(\ds \paren {x + \paren {y + z} } + N\)





using Vector Space Axiom $(\text V 2)$: Associativity for $X$














\(\ds \)

\(=\)







\(\ds \paren {x + N} + \paren {\paren {y + z} + N}\)




















\(\ds \)

\(=\)







\(\ds \paren {x + N} + \paren {\paren {y + N} + \paren {z + N} }\)




















\(\ds \)

\(=\)







\(\ds \mathbf x + \paren {\mathbf y + \mathbf z}\)









$\Box$

Proof of Vector Space Axiom $(\text V 3)$: Identity
Let $0_{X/N} = 0_X + N = N$. 
We prove that $0_{X/N}$ satisfies the demand of Vector Space Axiom $(\text V 3)$: Identity.
Let $\mathbf x \in X/N$.
Then there exists $x \in X$ such that $\mathbf x = x + N$. 
We have: 














\(\ds 0_{X/N} + \mathbf x\)

\(=\)







\(\ds \paren {0_X + N} + \paren {x + N}\)




















\(\ds \)

\(=\)







\(\ds \paren {0_X + x} + N\)




















\(\ds \)

\(=\)







\(\ds x + N\)





using Vector Space Axiom $(\text V 3)$: Identity for $X$














\(\ds \)

\(=\)







\(\ds \paren {x + 0_X} + N\)





using Vector Space Axiom $(\text V 3)$: Identity for $X$














\(\ds \)

\(=\)







\(\ds \paren {x + N} + \paren {0_X + N}\)




















\(\ds \)

\(=\)







\(\ds \mathbf x + \mathbf 0_{X/N}\)









$\Box$

Proof of Vector Space Axiom $(\text V 4)$: Inverses
Let $\mathbf x \in X/N$.
Then there exists $x \in X$ such that $\mathbf x = x + N$. 
Set $-\mathbf x = -x + N$.
We then have: 














\(\ds \mathbf x + \paren {-\mathbf x}\)

\(=\)







\(\ds \paren {x + N} + \paren {-x + N}\)




















\(\ds \)

\(=\)







\(\ds \paren {x - x} + N\)




















\(\ds \)

\(=\)







\(\ds 0_X + N\)




















\(\ds \)

\(=\)







\(\ds 0_{X/N}\)









$\Box$

Proof of Vector Space Axiom $(\text V 5)$: Distributivity over Scalar Addition
Let $\lambda, \mu \in K$. 
Let $\mathbf x \in X/N$.
Then there exists $x \in X$ such that $\mathbf x = x + N$.
Then we have: 














\(\ds \paren {\lambda + \mu} \mathbf x\)

\(=\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda + \mu} \paren {x + N}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {\lambda + \mu} x} + N\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda x + \mu x} + N\)





Vector Space Axiom $(\text V 5)$: Distributivity over Scalar Addition for $X$














\(\ds \)

\(=\)







\(\ds \paren {\lambda x + N} + \paren {\mu x + N}\)




















\(\ds \)

\(=\)







\(\ds \lambda \paren {x + N} + \mu \paren {x + N}\)




















\(\ds \)

\(=\)







\(\ds \lambda \mathbf x + \mu \mathbf x\)









$\Box$

Proof of Vector Space Axiom $(\text V 6)$: Distributivity over Vector Addition
Let $\lambda \in K$.
Let $\mathbf x, \mathbf y \in X/N$.
Then there exists $x, y \in N$ such that $\mathbf x = x + N$ and $\mathbf y = y + N$. 
We then have: 














\(\ds \lambda \paren {\mathbf x + \mathbf y}\)

\(=\)







\(\ds \lambda \paren {\paren {x + N} + \paren {y + N} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \paren {\paren {x + y} + N}\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda \paren {x + y} } + N\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda x + \lambda y} + N\)





Vector Space Axiom $(\text V 6)$: Distributivity over Vector Addition for $X$














\(\ds \)

\(=\)







\(\ds \paren {\lambda x + N} + \paren {\lambda y + N}\)




















\(\ds \)

\(=\)







\(\ds \lambda \paren {x + N} + \lambda \paren {y + N}\)




















\(\ds \)

\(=\)







\(\ds \lambda \mathbf x + \lambda \mathbf y\)









Proof of Vector Space Axiom $(\text V 7)$: Associativity with Scalar Multiplication
Let $\lambda, \mu \in K$.
Let $\mathbf x \in X/N$.
Then there exists $x \in X$ such that $\mathbf x = x + N$. 
We have: 














\(\ds \lambda \paren {\mu \mathbf x}\)

\(=\)







\(\ds \lambda \paren {\mu \paren {x + N} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \paren {\mu x + N}\)




















\(\ds \)

\(=\)







\(\ds \paren {\lambda \paren {\mu x} } + N\)




















\(\ds \)

\(=\)







\(\ds \lambda \mu x + N\)





Vector Space Axiom $(\text V 7)$: Associativity with Scalar Multiplication for $X$














\(\ds \)

\(=\)







\(\ds \lambda \mu \paren {x + N}\)




















\(\ds \)

\(=\)







\(\ds \lambda \mu \mathbf x\)









$\Box$

Proof of Vector Space Axiom $(\text V 8)$: Identity for Scalar Multiplication
Let $\mathbf x \in X/N$.
Then there exists $x \in X$ such that $\mathbf x = x + N$.
Then we have: 














\(\ds 1_K \mathbf x\)

\(=\)







\(\ds 1_K \paren {x + N}\)




















\(\ds \)

\(=\)







\(\ds \paren {1_K x} + N\)




















\(\ds \)

\(=\)







\(\ds x + N\)





Vector Space Axiom $(\text V 8)$: Identity for Scalar Multiplication for $X$



$\blacksquare$





