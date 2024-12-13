# 

Source: https://proofwiki.org/wiki/Reciprocal_Function_is_Continuous_on_Real_Numbers_without_Zero

Theorem
Let $\R_{\ne 0}$ denote the real numbers excluding $0$:

$\R_{\ne 0} := \R \setminus \set 0$.
Let $f: \R_{\ne 0} \to \R$ denote the reciprocal function:

$\forall x \in \R_{\ne 0}: \map f x = \dfrac 1 x$
Then $f$ is continuous on all real intervals which do not include $0$.


Proof
From Identity Mapping is Continuous, the real function $g$ defined as:

$\forall x \in \R: \map g x = x$
is continuous on $\R$.
From Constant Mapping is Continuous, the real function $h$ defined as:

$\forall x \in \R: \map x h = 1$

We note that $\map g 0 = 0$.
The result then follows from Quotient Rule for Continuous Real Functions:

$\map f x = \dfrac {\map h x} {\map g x}$
is continuous wherever $\map g x \ne 0$.
$\blacksquare$





