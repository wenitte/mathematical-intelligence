# 

Source: https://proofwiki.org/wiki/Integral_of_Integrable_Function_is_Additive/Lemma

Lemma
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $f_1, f_2, g_1, g_2 : X \to \R$ be positive $\mu$-integrable functions with: 

$f_1 - f_2 = g_1 - g_2$

Then: 

$\ds \int f_1 \rd \mu - \int f_2 \rd \mu = \int g_1 \rd \mu - \int g_2 \rd \mu$


Proof
We have that: 

$f_1 + g_2 = g_1 + f_2$
From Pointwise Sum of Measurable Functions is Measurable, we have that: 

$f_1 + g_2$ and $g_1 + f_2$ are $\Sigma$-measurable.
So we have: 

$\ds \int \paren {f_1 + g_2} \rd \mu = \int \paren {g_1 + f_2} \rd \mu$
So:

$\ds \int f_1 \rd \mu + \int g_2 \rd \mu = \int g_1 \rd \mu + \int f_2 \rd \mu$
from Integral of Positive Measurable Function is Additive.
Since $f_1, f_2, g_1, g_2$ are all $\mu$-integrable, each term is finite, and so: 

$\ds \int f_1 \rd \mu - \int f_2 \rd \mu = \int g_1 \rd \mu - \int g_2 \rd \mu$
$\blacksquare$





