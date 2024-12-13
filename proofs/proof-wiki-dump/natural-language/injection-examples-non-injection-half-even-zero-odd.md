# 

Source: https://proofwiki.org/wiki/Injection/Examples/Non-Injection/Half_Even_Zero_Odd

Example of Mapping which is Not an Injection
Let $f: \Z \to Z$ be the real function defined as:

$\forall x \in \Z: \map f x = \begin{cases} \dfrac x 2 & : x \text { even} \\ 0 & : x \text { odd} \end{cases}$
Then $f$ is not an injection.


Proof
For $f$ to be an injection, it would be necessary that:

$\forall x_1, x_2 \in \Z: x_1 \ne x_2 \implies \map f {x_1} \ne \map f {x_2}$
But take, for example, $x_1 = 1, x_2 = 3$.
Then:

$\map f {x_1} = 0 = \map f {x_2}$
and it follows that $f$ is not an injection.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $3$. Mappings: Exercise $2 \ \text {(iii) (a)}$




