# 

Source: https://proofwiki.org/wiki/Integer_Square_Function_is_not_Injective

Example of Mapping which is Not an Injection
Let $f: \Z \to \Z$ be the real square function:

$\forall x \in \Z: \map f x = x^2$
Then $f$ is not an injection.


Proof
For $f$ to be an injection, it would be necessary that:

$\forall x_1, x_2 \in \R: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
By definition of the squaring operation, we have:

$\map f x = \map f {-x}$
But unless $x = 0$ it is not the case that $x = -x$.
Hence $f$ is not an injection.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $3$. Mappings: Exercise $2 \ \text {(i) (a)}$




