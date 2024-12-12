# 

Source: https://proofwiki.org/wiki/Derivative_of_Differentiable_Function_on_Open_Interval_is_Somewhere_Continuous

Theorem
Let $I = \openint a b$ be a open interval..
Let $f : I \to \R$ be a differentiable function.
Let $f'$ be the derivative of $f$. 

Then $f'$ has a point of continuity.


Proof
Let $D$ be the set of discontinuities of $f'$.
Let $d$ be Euclidean metric on $\R$. 
From Derivative of Differentiable Function on Open Interval is Baire Function:

$f'$ is a Baire function.
From Set of Discontinuities of Baire Function is Meager:

$D$ is meager in $\struct {I, d}$.
From Open Real Interval is Non-Meager:

$I$ is non-meager in $\struct {I, d}$.
Therefore $D \ne I$. 
Since $D \subset I$, we have that $I \setminus D$ is non-empty.
That is, $f'$ has a point of continuity.
$\blacksquare$





