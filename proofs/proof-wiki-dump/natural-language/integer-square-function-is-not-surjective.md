# 

Source: https://proofwiki.org/wiki/Integer_Square_Function_is_not_Surjective

Example of Mapping which is Not a Surjection
Let $f: \Z \to \Z$ be the real square function:

$\forall x \in \Z: \map f x = x^2$
Then $f$ is not a surjection.


Proof
For $f$ to be a surjection, it would be necessary that:

$\forall y \in \Z: \exists x \in \Z: \map f x = y$

However from Square of Real Number is Non-Negative:

$\forall y \in \Z_{< 0}: \nexists x \in \Z: \map f x = y$

We also have that, for example, Square Root of Prime is Irrational.
So for all $p \in \Z$ such that $p$ is prime:

$\nexists x \in \Z: \map f x = p$

Hence $f$ is not a surjection.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $3$. Mappings: Exercise $2 \ \text {(i) (b)}$




