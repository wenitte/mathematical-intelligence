# 

Source: https://proofwiki.org/wiki/Gaussian_Integers_form_Subring_of_Complex_Numbers



Theorem
The ring of Gaussian integers:

$\struct {\Z \sqbrk i, +, \times}$
forms a subring of the set of complex numbers $\C$.


Proof
From Complex Numbers form Field, $\C$ forms a field.
By definition, a field is a ring.
Thus it is possible to use the Subring Test.

We note that $\Z \sqbrk i$ is not empty, as (for example) $0 + 0 i \in \Z \sqbrk i$.

Let $a + b i, c + d i \in \Z \sqbrk i$.
Then we have $-\paren {c + d i} = -c - d i$, and so:














\(\ds \paren {a + b i} + \paren {-\paren {c + d i} }\)

\(=\)







\(\ds \paren {a + b i} + \paren {- c - d i}\)




















\(\ds \)

\(=\)







\(\ds \paren {a + \paren {-c} } + \paren {b + \paren {-d} } i\)




















\(\ds \)

\(=\)







\(\ds \paren {a - c} + \paren {b - d} i\)









We have that $a, b, c, d \in \Z$ and $\Z$ is an integral domain, therefore by definition a ring.
So it follows that $a - c \in \Z$ and $b - d \in \Z$, and hence:

$\paren {a - c} + \paren {b - d} i \in \Z \sqbrk i$

Now consider $\paren {a + b i} \paren {c + d i}$.
By the definition of complex multiplication, we have:

$\paren {a + b i} \paren {c + d i} = \paren {a c - b d} + \paren {a d + b c} i$

As $a, b, c, d \in \Z$ and $\Z$ is a ring, it follows that:

$a c - b d \in \Z$ and $ad + bc \in \Z$
So:

$\paren {a + b i} \paren {c + d i} \in \Z \sqbrk i$

So by the Subring Test, $\Z \sqbrk i$ is a subring of $\C$.
$\blacksquare$


Also see
Gaussian Integers form Integral Domain
Gaussian Integers does not form Subfield of Complex Numbers


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 19$. Subrings: Example $33$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $5$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $3$




