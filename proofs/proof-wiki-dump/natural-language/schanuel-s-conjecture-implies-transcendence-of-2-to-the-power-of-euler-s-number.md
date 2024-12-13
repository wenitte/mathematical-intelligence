# 

Source: https://proofwiki.org/wiki/Schanuel%27s_Conjecture_Implies_Transcendence_of_2_to_the_power_of_Euler%27s_Number

Theorem
Let Schanuel's Conjecture be true.

Then $2$ to the power of Euler's number $e$:

$2^e$
is transcendental, where $e$ is Euler's number.


Proof
Assume the truth of Schanuel's Conjecture.
Let $z_1 = \ln \ln 2$, $z_2 = 1 + \ln \ln 2$, $z_3 = \ln 2$, and $z_4 = e \ln 2$.
By Lemma, they are linearly independent over the rational numbers $\Q$.
Observe that $z_3 = e^{z_1}$ and $z_4 = e^{z_2}$.
By Schanuel's Conjecture, the extension field $\map \Q {z_1, z_2, z_3, z_4, e^{z_1}, e^{z_2}, e^{z_3}, e^{z_4} }$ has transcendence degree at least $4$ over the rational numbers $\Q$.
That is, the extension field $\map \Q {\ln \ln 2, 1 + \ln \ln 2, \ln 2, e \ln 2, \ln 2, e \ln 2, 2, 2^e}$ has transcendence degree at least $4$ over $\Q$.
However, $2$ is algebraic.
Also, $\ln \ln 2$ and $1 + \ln \ln 2$ are not algebraically independent over $\Q$.
Therefore, $\ln \ln 2$, $\ln 2$, $e \ln 2$, and $2^e$ must all be transcendental.
Therefore, if Schanuel's Conjecture holds, then $2^e$ is transcendental.
$\blacksquare$





