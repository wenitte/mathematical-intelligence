# 

Source: https://proofwiki.org/wiki/Jordan_Decomposition_of_Finite_Signed_Measure

Theorem
Let $\struct {X, \Sigma}$ be measurable.
Let $\mu$ be a finite signed measure on $\struct {X, \Sigma}$. 
Let $\tuple {\mu^+, \mu^-}$ be the Jordan decomposition of $\mu$.

Then $\mu^+$ and $\mu^-$ are finite measures.


Proof
From the definition of Jordan decomposition, we have: 

$\mu = \mu^+ - \mu^-$
with at least one of $\mu^+$ and $\mu^-$ finite.
From the definition of a finite signed measure, we have: 

$\cmod {\map \mu X} < \infty$
We show that: 

if exactly one of $\mu^+$ and $\mu^-$ is finite, then $\mu$ is not a finite signed measure
that is: 

if exactly one of $\mu^+$ and $\mu^-$ is finite, then $\map \mu X = \infty$ or $\map \mu X = -\infty$.
At which point we will have a contradiction, giving:

$\mu^+$ and $\mu^-$ are both finite.

Aiming for a contradiction, suppose suppose exactly one of $\mu^+$ and $\mu^-$ is finite.
Consider first the case of $\mu^+$ non-finite.
Then $\mu^-$ is finite, so:

$\map {\mu^-} X < \infty$
Since $\mu^+$ is not finite, we have: 

$\map {\mu^+} X = \infty$
From the definition of extended real subtraction, we then have: 

$\map \mu X = \map {\mu^+} X - \map {\mu^-} X = \infty$
which contradicts: 

$\cmod {\map \mu X} < \infty$
So we have a contradiction in the case of $\mu^+$ non-finite.
Now suppose that $\mu^-$ is non-finite.
Then $\mu^+$ is finite, so:

$\map {\mu^+} X < \infty$
Since $\mu^-$ is not finite, we have: 

$\map {\mu^-} X = \infty$
From the definition of extended real subtraction, we then have: 

$\map \mu X = \map {\mu^+} X - \map {\mu^-} X = -\infty$
which contradicts: 

$\cmod {\map \mu X} < \infty$
So we have a contradiction in the case of $\mu^-$ non-finite.

So we must have that both $\mu^+$ and $\mu^-$ are finite, completing the proof.
$\blacksquare$





