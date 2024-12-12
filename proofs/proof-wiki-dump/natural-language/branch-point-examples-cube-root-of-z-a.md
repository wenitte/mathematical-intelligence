# 

Source: https://proofwiki.org/wiki/Branch_Point/Examples/Cube_Root_of_z-a

Example of Branch Point
Let $f: \C \to \C$ be the complex function defined as:

$\forall z \in \C: \map f z = \paren {z - a}^{1/3}$
for some $a \in \C$.
Then $a$ is a branch point of $f$.


Proof
We need to show that:

$f$ has exactly one value at $a$ itself.
$f$ has more than one value at one or more points in every neighborhood of $a$

We have that:

$f$ has exactly one value at $a$ itself:
$\map f a = \paren {a - a}^{1/3} = 0$

To demonstrate the second part, we recall that the $\epsilon$-neighborhood of $a$ is defined as:

$\map {N_\epsilon} a := \set {z \in \C: \cmod {z - a} < \epsilon}$
Therefore, we need to show that $\forall \epsilon: \map f {\epsilon + a}$ will have more than one value.
From Cube Roots of Unity we have:














\(\ds e^{0 i \pi / 3}\)

\(=\)







\(\ds 1\)




















\(\ds e^{2 i \pi / 3}\)

\(=\)







\(\ds -\frac 1 2 + \frac {i \sqrt 3} 2\)




















\(\ds e^{4 i \pi / 3}\)

\(=\)







\(\ds -\frac 1 2 - \frac {i \sqrt 3} 2\)










We can rewrite $\epsilon$ as $e^{\map \ln \epsilon}$ thus:

$\map f {\epsilon + a} = \paren {\paren {\epsilon + a} - a}^{1/3} = e^{\tfrac 1 3 \map \ln \epsilon} \times \paren {1}$
$\map f {\epsilon + a} = \paren {\paren {\epsilon + a} - a}^{1/3} =  e^{\tfrac 1 3 \map \ln \epsilon} \times \paren {-\dfrac 1 2 + \dfrac {i \sqrt 3} 2 }$
$\map f {\epsilon + a} = \paren {\paren {\epsilon + a} - a}^{1/3} =  e^{\tfrac 1 3 \map \ln \epsilon} \times \paren {-\dfrac 1 2 - \dfrac {i \sqrt 3} 2 }$

Hence $f$ has more than one value (three in this example) at one or more points in every neighborhood of $a$.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): singular point (singularity): 1.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): singular point (singularity): 1.




