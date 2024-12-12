# 

Source: https://proofwiki.org/wiki/Exponential_of_Sum/Complex_Numbers



Theorem
Let $z_1, z_2 \in \C$ be complex numbers.
Let $\exp z$ be the exponential of $z$.

Then:

$\map \exp {z_1 + z_2} = \paren {\exp z_1} \paren {\exp z_2}$


Corollary
Let $z_1, z_2 \in \C$ be complex numbers.
Let $\exp z$ be the exponential of $z$.

Then:

$\map \exp {z_1 - z_2} = \dfrac {\exp z_1} {\exp z_2}$


General Result
Let $m \in \N_{>0}$ be a natural number.
Let $z_1, z_2, \ldots, z_m \in \C$ be complex numbers.
Let $\exp z$ be the exponential of $z$.

Then:

$\ds \map \exp {\sum_{j \mathop = 1}^m z_j} = \prod_{j \mathop = 1}^m \paren {\exp z_j}$


Proof
This proof is based on the definition of the complex exponential as the unique solution of the differential equation:

$\dfrac \d {\d z} \exp = \exp$
which satisfies the initial condition $\map \exp 0 = 1$.

Define the complex function  $f: \C \to \C$ by:

$\map f z = \map \exp z \, \map \exp {z_1 + z_2 - z}$
Then find its derivative:














\(\ds D_z \, \map f z\)

\(=\)







\(\ds \paren {D_z \, \map \exp z} \map \exp {z_1 + z_2 - z} + \map \exp z \paren {D_z \map \exp {z_1 + z_2 - z} }\)





Derivative of Complex Composite Function














\(\ds \)

\(=\)







\(\ds \map \exp z \, \map \exp {z_1 + z_2 - z} + \map \exp z \, \map \exp {z_1 + z_2 - z} \map {D_z} {z_1 + z_2 - z}\)





as $\exp$ is its own derivative














\(\ds \)

\(=\)







\(\ds \map \exp z \, \map \exp {z_1 + z_2 - z} - \map \exp z \, \map \exp {z_1 + z_2 - z}\)





Derivative of Complex Power Series














\(\ds \)

\(=\)







\(\ds 0\)










From Zero Derivative implies Constant Complex Function, it follows that $f$ is constant.

Then:














\(\ds \map \exp {z_1} \, \map \exp {z_2}\)

\(=\)







\(\ds \map f {z_1}\)




















\(\ds \)

\(=\)







\(\ds \map f 0\)





as $f$ is constant














\(\ds \)

\(=\)







\(\ds \map \exp 0 \, \map \exp {z_1 + z_2}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {z_1 + z_2}\)





as $\map \exp 0 = 1$



$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.5$. The Functions $e^z$, $\cos z$, $\sin z$: $\text{(i)}$: $(4.12)$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $2$: Functions, Limits and Continuity: The Elementary Functions: $3$
2001: Christian Berg: Kompleks funktionsteori: $\S 1.5$




