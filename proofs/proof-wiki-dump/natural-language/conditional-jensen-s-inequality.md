# 

Source: https://proofwiki.org/wiki/Conditional_Jensen%27s_Inequality

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\GG$ be a sub-$\sigma$-algebra of $\Sigma$. 
Let $X$ be an integrable random variable.
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ given $\GG$.
Let $f : \R \to \R$ be a convex function such that $\map f X$ is integrable.
Let $\expect {\map f X \mid \GG}$ be a version of the conditional expectation of $\map f X$ given $\GG$.

Then: 

$\map f {\expect {X \mid \GG} } \le \expect {\map f X \mid \GG}$


Proof
Note that from Convex Real Function is Measurable and Composition of Measurable Mappings is Measurable, $\map f X$ is $\Sigma$-measurable, so the hypotheses make sense. 
By Convex Real Function is Pointwise Supremum of Affine Functions: Corollary, there exists a countable set $\SS \subseteq \R^2$ such that: 

$\ds \map f x = \sup_{\tuple {a, b} \mathop \in \SS} \paren {a x + b}$
so: 

$\ds \map f X = \sup_{\tuple {a, b} \mathop \in \SS} \paren {a X + b}$
So for each $\tuple {a, b} \in \SS$, we have: 

$a X + b \le \map f X$
From Conditional Expectation is Monotone and Conditional Expectation is Linear, we have: 

$a \expect {X \mid \GG} + b \le \expect {\map f X \mid \GG}$ almost surely
for each $\tuple {a, b} \in \SS$. 
For each $\tuple {a, b} \in \SS$, let $A_{\tuple {a, b} }$ be the set of sample points $\omega \in \Omega$ such that this inequality fails.
Then for:

$\ds \omega \in \Omega \setminus \bigcup_{\tuple {a, b} \mathop \in \SS} A_{\tuple {a, b} }$
we have: 

$a \map {\expect {X \mid \GG} } \omega + b \le \map {\expect {\map f X \mid \GG} } \omega$ for all $\tuple {a, b} \in \SS$
From Null Sets Closed under Countable Union, we have: 

$\ds \map \Pr {\bigcup_{\tuple {a, b} \mathop \in \SS} A_{\tuple {a, b} } } = 0$
So we have: 

$a \expect {X \mid \GG} + b \le \expect {\map f X \mid \GG}$ for all $\tuple {a, b} \in \SS$ almost surely.
We therefore have: 

$\ds \sup_{\tuple {a, b} \mathop \in \SS} \paren {a \expect {X \mid \GG} + b} \le \expect {\map f X \mid \GG}$ almost surely.
that is: 

$\map f {\expect {X \mid \GG} } \le \expect {\map f X \mid \GG}$ almost surely.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.7$: Properties of conditional expectation: a list




