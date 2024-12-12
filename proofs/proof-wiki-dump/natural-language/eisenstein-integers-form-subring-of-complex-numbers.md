# 

Source: https://proofwiki.org/wiki/Eisenstein_Integers_form_Subring_of_Complex_Numbers

Theorem
The set of Eisenstein integers $\Z \sqbrk \omega$, under the operations of complex addition and complex multiplication, forms a subring of the set of complex numbers $\C$.


Proof
We will use the Subring Test.
This is valid, as the set of complex numbers $\C$ forms a field, which is by definition itself a ring.

We note that $\Z \sqbrk \omega$ is not empty, as (for example) $0 + 0 \omega \in \Z \sqbrk \omega$.

Let $a + b \omega, c + d \omega \in \Z \sqbrk \omega$.
Then we have $-\paren {c + d \omega} = -c - d \omega$, and so:














\(\ds \paren {a + b \omega} + \paren {-\paren {c + d \omega} }\)

\(=\)







\(\ds \paren {a + b \omega} + \paren {-c - d \omega}\)




















\(\ds \)

\(=\)







\(\ds \paren {a + \paren {-c} } + \paren {b + \paren {-d} } \omega\)




















\(\ds \)

\(=\)







\(\ds \paren {a - c} + \paren {b - d} \omega\)









We have that $a, b, c, d \in \Z$ and $\Z$ is an integral domain.
Therefore by definition $\Z$ is a ring.
So it follows that $a - c \in \Z$ and $b - d \in \Z$.
Hence $\paren {a - c} + \paren {b - d} \omega \in \Z \sqbrk \omega$.

Now consider $\paren {a + b \omega} \paren {c + d \omega}$.
By the definition of complex multiplication, we have:

$\paren {a + b \omega} \paren {c + d \omega} = \paren {a c - b d} + \paren {a d + b c} \omega$

As $a, b, c, d \in \Z$ and $\Z$ is a ring, it follows that $a c - b d \in \Z$ and $ad + bc \in \Z$.
Hence:

$\paren {a + b \omega} \paren {c + d \omega} \in \Z \sqbrk \omega$

So by the Subring Test, $\Z \sqbrk \omega$ is a subring of $\C$.
$\blacksquare$


Also see
Definition:Ring of Eisenstein Integers




