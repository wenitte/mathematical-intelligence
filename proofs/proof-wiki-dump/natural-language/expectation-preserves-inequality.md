# 

Source: https://proofwiki.org/wiki/Expectation_Preserves_Inequality

Theorem
Let $X$, $Y$ be random variables.
Let $\map \Pr {X \ge Y} = 1$.

Then: 

$\expect X \ge \expect Y$


Proof
Note that we have: 

$\map \Pr {X - Y \ge 0} = 1$
From Expectation of Non-Negative Random Variable is Non-Negative, we then have: 

$\expect {X - Y} \ge 0$
From Sum of Expectations of Independent Trials, we have: 

$\expect X + \expect {-Y} \ge 0$
From Expectation of Linear Transformation of Random Variable, we have:

$\expect X - \expect Y \ge 0$
That is: 

$\expect X \ge \expect Y$
$\blacksquare$





