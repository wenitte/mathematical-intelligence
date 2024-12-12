# 

Source: https://proofwiki.org/wiki/Gaussian_Rationals_form_Number_Field

Theorem
The set of Gaussian rationals $\Q \sqbrk i$, under the operations of complex addition and complex multiplication, forms a number field.


Proof
By definition, a number field is a subfield of the field of complex numbers $\C$.
Recall the definition of the Gaussian rationals:

$\Q \sqbrk i = \set {z \in \C: z = a + b i: a, b \in \Q}$

From Complex Numbers form Field, $\C$ forms a field.
Thus it is possible to use the Subfield Test.

$\Q \sqbrk i$ is not empty, as (for example) $0 + 0 i \in \Q \sqbrk i$.

Let $a + b i, c + d i \in \Q \sqbrk i$.
Then we have $-\paren {c + d i} = -c - d i$, and so:














\(\ds \paren {a + b i} + \paren {-\paren {c + d i} }\)

\(=\)







\(\ds \paren {a + b i} + \paren {-c - d i}\)




















\(\ds \)

\(=\)







\(\ds \paren {a + \paren {-c} } + \paren {b + \paren {-d} } i\)




















\(\ds \)

\(=\)







\(\ds \paren {a - c} + \paren {b - d} i\)









As $a, b, c, d \in \Q$ and $\Q$ is a field, it follows that $a - c \in \Q$ and $b - d \in \Q$, and hence $\paren {a - c} + \paren {b - d} i \in \Q \sqbrk i$.

Now consider $\paren {a + b i} \paren {c + d i}$.
By the definition of complex multiplication, we have:

$\paren {a + b i} \paren {c + d i} = \paren {a c - b d} + \paren {a d + b c} i$

As $a, b, c, d \in \Q$ and $\Q$ is a field, it follows that $a c - b d \in \Q$ and $ad + bc \in \Q$ and so $\paren {a + b i} \paren {c + d i} \in \Q \sqbrk i$.

Finally, let $z = x + y i \in \Q \sqbrk i_{\ne 0} = \Q \sqbrk i \setminus \set {0 + 0 i}$, that is such that $x + y i \ne 0 + 0 i$.
Then, by Inverse for Complex Multiplication:

$\dfrac 1 {x + y i} = \dfrac {x - y i} {x^2 + y^2}$
As $x$ and $y$ are not both zero, it follows that:

$x^2 + y^2 \ne 0$ and so $x^2 + y^2 \in \Q_{\ne 0}$
Thus it follows that either $\dfrac x {x^2 + y^2} \in \Q_{\ne 0}$ or $\dfrac y {x^2 + y^2} \in \Q_{\ne 0}$ (or both, or course).
Thus $\dfrac 1 {x + y i} \in \Q \sqbrk i_{\ne 0}$.

So by the Subfield Test, $\Q \sqbrk i$ is a subfield of $\C$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $3$: Field Theory: Definition and Examples of Field Structure: $\S 88 \gamma$




