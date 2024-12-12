# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Sequence_of_Powers_of_Constant



Theorem
Let $c \in \R$ be a constant.
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \Z_{\ge 0}: a_n = c^n$
That is:

$\sequence {a_n} = 1, c, c^2, c^3, \ldots$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac 1 {1 - c z}$


Proof
Consider the sequence $\sequence {b_n}$ defined as:

$\forall n \in \Z_{\ge 0}: b_n = 1$
Let $\map H z$ be the generating function for $\sequence {b_n}$.

Then:














\(\ds \map H z\)

\(=\)







\(\ds \dfrac 1 {1 - z}\)





Generating Function for Constant Sequence








\(\ds \leadsto \ \ \)





\(\ds \map H {c z}\)

\(=\)







\(\ds \dfrac 1 {1 - c z}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {b_n c^n} z^n\)





Generating Function of Multiple of Parameter














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} c^n z^n\)





as $b_n = 1$ throughout



The result follows from the definition of a generating function.
$\blacksquare$


Examples
Example: $\sequence {2^n}$
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \Z_{\ge 0}: a_n = 2^n$
That is:

$\sequence {a_n} = 1, 2, 4, 8, \ldots$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac 1 {1 - 2 z}$


Example: $\sequence {2^n + 3^n}$
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \Z_{\ge 0}: a_n = 2^n + 3^n$
That is:

$\sequence {a_n} = 2, 5, 13, 35, \ldots$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac 1 {1 - 2 z} + \dfrac 1 {1 - 3 z}$


Example: $\sequence {\paren {b + 1}^n - b^n}$
Let $b \in \R_{>0}$ be a positive real number.
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \Z_{\ge 0}: a_n = \paren {b + 1}^n - b^n$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac z {\paren {1 - b z} \paren {1 - b z - z} }$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions




