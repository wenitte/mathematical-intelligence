# 

Source: https://proofwiki.org/wiki/Schanuel%27s_Conjecture_Implies_Transcendence_of_Pi_to_the_power_of_Euler%27s_Number

Theorem
Let Schanuel's Conjecture be true.

Then $\pi$(pi) to the power of Euler's number $e$:

$\pi^e$
is transcendental.


Proof
Assume the truth of Schanuel's Conjecture.
Let $z_1 = \ln \ln \pi$, $z_2 = 1 + \ln \ln \pi$, $z_3 = \ln \pi$, $z_4 = e \ln \pi$, and $z_5 = i \pi$.
By Lemma, they are linearly independent over the rational numbers $\Q$.
Observe that $z_3 = e^{z_1}$ and $z_4 = e^{z_2}$.
By Schanuel's Conjecture, the extension field $\Q \left({z_1, z_2, z_3, z_4, z_5, e^{z_1}, e^{z_2}, e^{z_3}, e^{z_4}, e^{z_5}}\right)$ has transcendence degree at least $5$ over the rational numbers $\Q$.
That is, the extension field $\Q \left({\ln \ln \pi, 1 + \ln \ln \pi, \ln \pi, e \ln \pi, i \pi, \ln \pi, e \ln \pi, \pi, \pi^e, e^{i \pi}}\right)$ has transcendence degree at least $5$ over $\Q$.
However, by Euler's Identity, $e^{i \pi} = -1$ is algebraic.
Also, $\ln \ln \pi$ and $1 + \ln \ln \pi$ are not algebraically independent over $\Q$.
Also, $\pi$ and $i \pi$ are not algebraically independent over $\Q$.
Therefore, $\ln \ln \pi$, $\ln \pi$, $e \ln \pi$, $\pi$, and $\pi^e$ must all be transcendental.
Therefore, if Schanuel's Conjecture holds, then $\pi^e$ is transcendental.
$\blacksquare$





