# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Number



Theorem
The following definitions of the concept of Complex Number are equivalent:

Definition 1
A complex number is a number in the form $a + b i$ or $a + i b$ where:

$a$ and $b$ are real numbers
$i$ is a square root of $-1$, that is, $i = \sqrt {-1}$.
Definition 2
A complex number is an ordered pair $\tuple {x, y}$ where $x, y \in \R$ are real numbers, on which the operations of addition and multiplication are defined as follows:


Complex Addition
Let $\tuple {x_1, y_1}$ and $\tuple {x_2, y_2}$ be complex numbers.
Then $\tuple {x_1, y_1} + \tuple {x_2, y_2}$ is defined as:

$\tuple {x_1, y_1} + \tuple {x_2, y_2}:= \tuple {x_1 + x_2, y_1 + y_2}$


Complex Multiplication
Let $\tuple {x_1, y_1}$ and $\tuple {x_2, y_2}$ be complex numbers.

Then $\tuple {x_1, y_1} \tuple {x_2, y_2}$ is defined as:

$\tuple {x_1, y_1} \tuple {x_2, y_2} := \tuple {x_1 x_2 - y_1 y_2, x_1 y_2 + y_1 x_2}$


Scalar Product
Let $\tuple {x, y}$ be a complex number.
Let $m \in \R$ be a real number.

Then $m \tuple {x, y}$ is defined as:

$m \tuple {x, y} := \tuple {m x, m y}$


Proof
Since:

$\tuple {x_1, 0} + \tuple {x_2, 0} = \tuple {x_1 + x_2, 0}$
$\tuple {x_1, 0} \tuple {x_2, 0} = \tuple {x_1 x_2, 0}$
we can identify a complex number (definition 2) $\tuple {x_1, 0}$ with the real number $x_1$.
Specifically, we can define an isomorphism between the set of complex numbers (definition 2) of the form $\tuple {x, 0}$ and the field of real numbers.

Now, we define $i = \tuple {0, 1}$.
Then:














\(\ds x + i y\)

\(=\)







\(\ds \tuple {x, 0} + \tuple {0, 1} \tuple {y, 0}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x, y}\)





Definition of Complex Addition and Definition of Complex Multiplication




Finally, we see that:














\(\ds i^2\)

\(=\)







\(\ds \tuple {0, 1} \tuple {0, 1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {0 \cdot 0 - 1 \cdot 1, 0 \cdot 1 + 1 \cdot 0}\)




















\(\ds \)

\(=\)







\(\ds \tuple {-1, 0}\)




















\(\ds \)

\(=\)







\(\ds -1\)









Thus we can say that $i = \sqrt {-1}$.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Axiomatic Foundations of the Complex Number System
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: Axiomatic Foundations of Complex Numbers: $14$




