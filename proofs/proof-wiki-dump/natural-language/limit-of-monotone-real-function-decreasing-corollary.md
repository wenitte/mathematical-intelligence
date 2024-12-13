# 

Source: https://proofwiki.org/wiki/Limit_of_Monotone_Real_Function/Decreasing/Corollary

Corollary to Limit of Decreasing Function
Let $f$ be a real function which is decreasing on the open interval $\openint a b$.
If $\xi \in \openint a b$, then:

$\map f {\xi^-}$ and $\map f {\xi^+}$ both exist
and:

$\map f x \ge \map f {\xi^-} \ge \map f \xi \ge \map f {\xi^+} \ge \map f y$
provided that $a < x < \xi < y < b$.


Proof
$f$ is bounded below on $\openint a \xi$ by $\map f \xi$.
By Limit of Decreasing Function, the infimum is $\map f {\xi^-}$.
So it follows that:

$\forall x \in \openint a \xi: \map f x \ge \map f {\xi^-} \ge \map f \xi$
A similar argument for $\openint \xi b$ holds for the other inequalities.
$\blacksquare$





