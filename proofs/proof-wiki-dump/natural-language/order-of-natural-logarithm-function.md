# 

Source: https://proofwiki.org/wiki/Order_of_Natural_Logarithm_Function

Theorem
Let $\epsilon \in \R_{>0}$ be a strictly positive real number.

Then: 

$\ln x = \map \OO {x^\epsilon}$ as $x \to \infty$
and:

$\ln x = \map \OO {x^{-\epsilon} }$ as $x \to 0^+$
where $\OO$ is big-O notation.


Proof
We first show that: 

$\ln x = \map \OO {x^\epsilon}$ as $x \to \infty$
We show that for $x \ge 1$, we have: 

$\ds 0 \le \ln x \le \frac 1 \epsilon x^\epsilon$
We first show that for $t \ge 0$, we have: 

$\ds t \le \frac 1 \epsilon e^{\epsilon t}$
The claim then follows taking $t = \ln x$.
Define a real function $f : \openint 0 \infty \to \R$ by: 

$\ds \map f t = \frac 1 \epsilon e^{\epsilon t} - t$
for $t \ge 0$. 
Then $f$ is differentiable with derivative:

$\map {f'} t = e^{\epsilon t} - 1$
by Derivative of Exponential Function.
So:

$\map {f'} t \ge 0$ for all $t \ge 0$.
So, from Real Function with Positive Derivative is Increasing:

$f$ is increasing for $t \ge 0$.
That is, for $t \ge 0$:

$\ds \map f t \ge \map f 0 = \frac 1 \epsilon > 0$
So:

$\ds \frac 1 \epsilon e^{\epsilon t} - t > 0$
for $t \ge 0$. 
So:

$\ds \frac 1 \epsilon e^{\epsilon t} \ge t \ge 0$
for $t \ge 0$ as required.
Hence, for $x \ge 1$ we have: 

$\ds 0 \le \ln x \le \frac 1 \epsilon x^\epsilon$
From the definition big-O notation, we have: 

$\ln x = \map \OO {x^\epsilon}$ as $x \to \infty$

We now show that: 

$\ln x = \map \OO {x^{-\epsilon} }$ as $x \to 0^+$
In particular, we can show that: 

$\ds \size {\ln x} \le \frac 1 \epsilon x^{-\epsilon}$
for $0 < x \le 1$. 
Note that since: 

$\ds \ln x \le \frac 1 \epsilon x^\epsilon$
for $x \ge 1$ we have: 

$\ds \map \ln {\frac 1 x} \le \frac 1 \epsilon x^{-\epsilon}$
for $0 < x \le 1$. 
So, by Logarithm of Power:

$\ds -\ln x \le \frac 1 \epsilon x^{-\varepsilon}$
For $0 < x \le 1$, we have: 

$\ln x \le 0$
so:

$\size {\ln x} = -\ln x$
from the definition of the absolute value. 
So we obtain: 

$\ds \size {\ln x} \le \frac 1 \epsilon x^{-\epsilon}$
for $0 < x \le 1$ as required.
From the definition big-O notation, we therefore have:

$\ln x = \map \OO {x^{-\epsilon} }$ as $x \to 0^+$
$\blacksquare$





