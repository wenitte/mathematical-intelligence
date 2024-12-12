# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convergent_Complex_Sequence



Theorem
The following definitions of the concept of Convergent Complex Sequence are equivalent:

Definition 1
Let $\sequence {z_k}$ be a sequence in $\C$.

$\sequence {z_k}$ converges to the limit $c \in \C$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R: n > N \implies \cmod {z_n - c} < \epsilon$
where $\cmod z$ denotes the modulus of $z$.

Definition 2
Let $\sequence {z_k} = \sequence {x_k + i y_k}$ be a sequence in $\C$.

$\sequence {z_k}$ converges to the limit $c = a + i b$ if and only if both:

$\forall \epsilon \in \R_{>0}: \exists N \in \R: n > N \implies \size {x_n - a} < \epsilon \text { and } \size {y_n - b} < \epsilon$
where $\size {x_n - a}$ denotes the absolute value of $x_n - a$.


Proof
$(1)$ implies $(2)$
Let $\sequence {z_n}$ be a convergent complex sequence by definition 1.
Then by definition:

$\forall \epsilon \in \R_{>0}: \exists N \in \R: n > N \implies \cmod {z_n - c} < \epsilon$
Let $z_n = x_n + i y_n$.
Let $c = a + i b$.
Let $\epsilon \in \R_{>0}$.
Let $N \in \R: n > N \implies \cmod {z_n - c} < \epsilon$.
Then:














\(\ds \sqrt {\paren {x_n - a}^2 + \paren {y_n - b}^2}\)

\(<\)







\(\ds \epsilon\)





Definition of Complex Modulus








\(\ds \leadsto \ \ \)





\(\ds \paren {x_n - a}^2 + \paren {y_n - b}^2\)

\(<\)







\(\ds \epsilon^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x_n - a}^2\)

\(<\)







\(\ds \epsilon^2\)




















\(\ds \paren {y_n - b}^2\)

\(<\)







\(\ds \epsilon^2\)














\(\ds \leadsto \ \ \)





\(\ds \size {x_n - a}\)

\(<\)







\(\ds \epsilon\)




















\(\ds \size {y_n - b}\)

\(<\)







\(\ds \epsilon\)









Thus $\sequence {z_n}$ is a convergent complex sequence by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $\sequence {z_n} = \sequence {x_n + y_n}$ be a convergent complex sequence by definition 2.
Then by definition:

$\forall \epsilon \in \R_{>0}: \exists N \in \R: n > N \implies \size {x_n - a} < \epsilon \text { and } \size {y_n - b} < \epsilon$
where $a + i b = c$.
Let $\epsilon \in \R_{>0}$.
Let $N \in \R: n > N \implies \size {x_n - a} < \dfrac \epsilon 2 \text { and } \size {y_n - b} < \dfrac \epsilon 2$.

Then:














\(\ds \cmod {z_n − c}\)

\(=\)







\(\ds \cmod {x_n + i y_n − \paren {a + i b} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {x_n − a + i \paren {y_n − b} }\)




















\(\ds \)

\(\le\)







\(\ds \cmod {x_n − a} + \cmod {i \paren {y_n − b} }\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(=\)







\(\ds \cmod {x_n − a} + \cmod {y_n − b}\)





Definition of Complex Modulus














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \cmod {y_n − b}\)





as $\cmod {x_n − a} < \dfrac \epsilon 2$














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





as $\cmod {y_n − b} < \dfrac \epsilon 2$














\(\ds \)

\(=\)







\(\ds \epsilon\)









Thus $\sequence {z_n}$ is a convergent complex sequence by definition 1.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.2$. Sequences: Theorem.




