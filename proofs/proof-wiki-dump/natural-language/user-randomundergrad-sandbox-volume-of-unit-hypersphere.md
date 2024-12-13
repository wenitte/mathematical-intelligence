# 

Source: https://proofwiki.org/wiki/User:RandomUndergrad/Sandbox/Volume_of_Unit_Hypersphere



Introduction
The n-ball with radius $R$ is defined to be the region bounded by the inequality
$$\sum^n_{i=1}x_i\le R^2$$
So
$$\int^R_{-R}\int^{\sqrt{R^2-x_1^2}}_{-\sqrt{R^2-x_1^2}}\cdots\int^{\sqrt{R^2-x_1^2-x_2^2-\dots-x^2_{n-1}}}_{-\sqrt{R^2-x_1^2-x_2^2-\dots-x^2_{n-1}}}1\; dx_n\; dx_{n-1}\cdots dx_1$$$$=2^n\int^R_0\int^{\sqrt{R^2-x_1^2}}_0\cdots\int^{\sqrt{R^2-x_1^2-x_2^2-\dots-x^2_{n-1}}}_01\; dx_n\; dx_{n-1}\cdots dx_1$$ is therefore the volume of the $n$-dimensional ball with radius $R$.

We prove that $V_n=\dfrac{2^{\left\lceil\frac n2\right\rceil}\pi^{\left\lfloor\frac n2\right\rfloor}}{n!!}R^n$.

Lemma 1. (Reduction Formula for $\int{\cos^n\theta}$)
For any $n\geq2$,$$\int^\frac\pi2_0\cos^{n}\theta \; d \theta=\frac{n-1}n\int^\frac\pi2_0\cos^{n-2}\theta \; d \theta$$
Proof. $$\int^{\frac\pi2}_0\cos^n\theta\;d\theta=\int^{\frac\pi2}_0\cos^{n-1}\theta\;d\sin\theta=\left[\cos^{n-1}\theta\sin\theta\right]^{\frac\pi2}_0-\int^{\frac\pi2}_0\sin\theta\;d\cos^{n-1}\theta$$$$=(n-1)\int^{\frac\pi2}_0\cos^{n-2}\theta\sin^2\theta\;d\theta=(n-1)\left(\int^{\frac\pi2}_0\cos^{n-2}\theta\;d\theta-\int^{\frac\pi2}_0\cos^n\theta\;d\theta\right)$$
So $\ds {n\int^{\frac\pi2}_0\cos^n\theta\;d\theta=(n-1)\int^{\frac\pi2}_0\cos^{n-2}\theta\;d\theta}$. The result follows.

Lemma 2.
For any $n\le 0$,$$\int^k_0(k^2-x^2)^\frac n2dx=\begin{cases}\frac\pi2k^{n+1}\left(\frac{n!!}{(n+1)!!}\right)\quad\text {if}\; n\;\text {is odd}\\\\k^{n+1}\left(\frac{n!!}{(n+1)!!}\right)\phantom{\frac\pi2}\quad\text{if}\; n\;\text {is even}\end{cases}$$
where $$n!!=\begin{cases}n\times(n-2)\times(n-4)\dots\times 1 \quad\text{if}\;  n \;  \text{is odd}\\n\times(n-2)\times(n-4)\dots\times2\quad\text{if}\;  n \;  \text{is even}\end{cases}$$
Proof. By substituting $x=k\sin\theta$, $\ds {\int^k_0(k^2-x^2)^\frac n2dx=\int^\frac\pi2_0k^{n+1}\cos^{n+1}\theta \; d \theta}$. By Lemma 1,
$$\int^\frac\pi2_0k^{n+1}\cos^{n+1}\theta \; d \theta=\begin{cases}k^{n+1}\left(\frac{n!!}{(n+1)!!}\right)\int^{\frac\pi2}_01\;d\theta\phantom{\cos\theta}=\frac\pi2k^{n+1}\left(\frac{n!!}{(n+1)!!}\right)\quad\text {if}\; n\;\text {is odd}\\\\k^{n+1}\left(\frac{n!!}{(n+1)!!}\right)\int^{\frac\pi2}_0\cos\theta\;d\theta\phantom1=k^{n+1}\left(\frac{n!!}{(n+1)!!}\right)\phantom{\frac\pi2}\quad\text{if}\; n\;\text {is even}\end{cases}$$

Conclusion
Therefore, by Lemma 2 and using the substitution $\ds {k=R^2-\sum^m_{i=0}x_i}$,
the volume of the $n$-dimensional ball
$$V_n=2^n\int^R_0\int^{\sqrt{R^2-x_1^2}}_0\cdots\int^{\sqrt{R^2-x_1^2-x_2^2-\dots-x^2_{n-1}}}_01\; dx_n\; dx_{n-1}\cdots dx_1$$
$$=2^n\int^R_0\int^{\sqrt{R^2-x_1^2}}_0\cdots\int^{\sqrt{R^2-x_1^2-x_2^2-\dots-x^2_{n-2}}}_0(R^2-x_1^2-x_2^2-\dots-x^2_{n-1})^\frac12\; dx_{n-1}\cdots dx_1$$
$$=2^n\int^R_0\int^{\sqrt{R^2-x_1^2}}_0\cdots\int^{\sqrt{R^2-x_1^2-x_2^2-\dots-x^2_{n-3}}}_0\frac\pi2\times\frac12(R^2-x_1^2-x_2^2-\dots-x^2_{n-2})^\frac22\; dx_{n-2}\cdots dx_1$$
$$=2^n\int^R_0\int^{\sqrt{R^2-x_1^2}}_0\cdots\int^{\sqrt{R^2-x_1^2-x_2^2-\dots-x^2_{n-4}}}_0\frac\pi2\times\frac12\times\frac23(R^2-x_1^2-x_2^2-\dots-x^2_{n-3})^\frac32\; dx_{n-3}\cdots dx_1$$
$$=2^n\int^R_0\int^{\sqrt{R^2-x_1^2}}_0\cdots\int^{\sqrt{R^2-x_1^2-x_2^2-\dots-x^2_{n-5}}}_0\left(\frac\pi2\right)^2\times\frac13\times\frac38(R^2-x_1^2-x_2^2-\dots-x^2_{n-4})^\frac42\; dx_{n-4}\cdots dx_1$$
$$=\cdots=2^n\int^R_0\int^{\sqrt{R^2-x_1^2}}_0\cdots\int^{\sqrt{R^2-x_1^2-x_2^2-\dots-x^2_{n-k-1}}}_0\left(\frac\pi2\right)^{\left\lfloor\frac k2\right\rfloor}\times\frac1{k!!}(R^2-x_1^2-x_2^2-\dots-x^2_{n-k})^\frac k2\; dx_{n-k}\cdots dx_1$$
$$=\cdots=2^n\times\left(\frac\pi2\right)^{\left\lfloor\frac n2\right\rfloor}\times\frac1{n!!}\times R^{2\left(\frac n2\right)}$$
$$=\frac{2^{\left\lceil\frac n2\right\rceil}\pi^{\left\lfloor\frac n2\right\rfloor}}{n!!}R^n$$
To simplify things,
$$V_{2n+1}=\frac{2^{n+1}\pi^n}{(2n+1)!!}R^{2n+1}$$
$$V_{2n}=\frac{\pi^n}{n!}R^{2n}$$
$\blacksquare$

Notes
If we suppose $V_n$ is a continuous function in $n$ (extending to the reals), we can write:

$V_{2 n + 1} = \dfrac {2^{2 n + 1} \pi^{{\frac {2 n + 1} 2} - \frac 1 2} \map \Gamma {\frac {2 n + 1} 2 + \frac 1 2}} {\map \Gamma {2 n + 2}} R^{2 n + 1}$
Suggesting we define:

$V_r = \dfrac {2^r \pi^{\frac {r - 1} 2} \map \Gamma {\frac {r + 1} 2}} {\map \Gamma {r + 1}} R^r$

Indeed this definition agrees with the even integers $2n$ (Check Gamma Function of Positive Half-Integer if interested).
This could be linked to Maximum Volume of Unit Radius Sphere in Fractional Dimensions, prompting the math enthusiast to differentiate $V_r$.
I am not that enthusiastic.
However, do note that by Legendre's Duplication Formula and $r \ge 0$, one can reduce the formula above to:

$V_r = \dfrac {\paren {R \sqrt \pi}^r} {\map \Gamma {\frac r 2 + 1}}$
Which gives the derivative:

$V_r' = \dfrac {\paren {R \sqrt \pi}^r \map \Gamma {\frac r 2 + 1} \ln \paren {R \sqrt \pi} - \frac 1 2 \paren {R \sqrt \pi}^r \map {\Gamma'} {\frac r 2 + 1}} {\map {\Gamma^2} {\frac r 2 + 1}}$
By Zeroes of Gamma Function the denominator is non-zero.
Thus $V_r = 0$ if and only if:

$\ln \paren {R \pi} = 2 \ln \paren {R \sqrt \pi} = \dfrac {\map {\Gamma'} {\frac r 2 + 1}} {\map \Gamma {\frac r 2 + 1} } = \map \psi {\frac r 2 + 1}$
where $\psi$ is the digamma function.

Verification via Wolfram|Alpha shows that for $R = 1$, the only positive solution is indeed $r ≈ 5.25694640486058...$,
as claimed in Maximum Volume of Unit Radius Sphere in Fractional Dimensions.

Substituting this to the volume should give $V_r ≈ 5.27776802111340...$
$\blacksquare$





