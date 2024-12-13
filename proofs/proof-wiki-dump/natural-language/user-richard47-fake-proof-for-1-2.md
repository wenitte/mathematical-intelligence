# 

Source: https://proofwiki.org/wiki/User:Richard47/Fake_Proof_for_1%3D2

Prove that $1 = 2$:
First, we prove that the series $1 - 1/2 + 1/3 - 1/4 + 1/5 - 1/6 + ...$ is absolutely convergent:
Let $A = sigma(1/n)$, $n$ runs the integers not containing $9453$ as substring,
then $A = (1 + 1/2 + 1/3 + 1/4 + ... + 1/9451 + 1/9452 + 1/9454 + 1/9455 + 1/9456 + ... + 1/10000) + (1/10001 + 1/10002 + 1/10003 + ... + 1/19451 + 1/19452 + 1/19454 + 1/19455 + 1/19456 + ... +  1/29451 + 1/29452 + 1/29454 + 1/29455 + 1/29456 + ... + 1/94528 + 1/94529 + 1/94540 + 1/94541 + 1/94542 + ... + 1/100000000) + (1/100000001 + 1/100000002 + 1/100000003 + ... + 1/100009451 + 1/100009452 + 1/100009454 + 1/100009455 + 1/100009456 + ... + 1/1000000000000) + ...$
and each "()" has $9999, 9999^2, 9999^3, ...$ terms, respectively.
thus we have $A < (1 + 1 + 1 + ... + 1) + (1/10000 + 1/10000 + 1/10000 + ... + 1/10000) + (1/100000000 + 1/100000000 + 1/100000000 + ... + 1/100000000) + ...$ (by direct comparison test, $1$ to $1/10000$ are all $\le 1$, $1/10001$ to $1/100000000$ are all $< 1/10000$, $1/100000001$ to $1/1000000000000$ are all $< 1/100000000$, etc.)
$= 1*9999 + (1/10000)*9999^2 + (1/100000000)*9999^3 + ...$
$= 9999 + (9999^2)/10000 + (9999^3)/100000000 + ...$
$= 9999 / (1-9999/10000)$
$= 99990000$ (a finite number)
thus $A < 99990000$, and $A$ must be convergent.
Let $B = sigma(1/n)$, $n$ runs the integers containing $9453$ as substring
then $B = 1/9453 + 1/19453 + 1/29453 + ... + 1/89453 + 1/94530 + 1/94531 + 1/94532 + ...$
and the first term of $B$ is less than the first term of $A$ ($1/9453 < 1$), the second term of $B$ is less than the second term of $A$ ($1/19453 < 1/2$), the third term of $B$ is less than the third term of $A$ ($1/29453 < 1/3$), etc.
Thus, by direct comparison test, $B$ must be also convergent.
Hence $A + B$ also converges (since sum of convergent series must also converge), however, $A + B$ is $1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 + ...$, thus, we proved that $1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 + ...$ converges, thus $1 - 1/2 + 1/3 - 1/4 + 1/5 - 1/6 + ...$ is absolutely convergent.
Besides, by the Mercator series: $ln(1+x) = x - (x^2)/2 + (x^3)/3 + (x^4)/4 + (x^5)/5 - (x^6)/6 + ...$
when $x = 1$, we have
$ln(2) = 1 - 1/2 + 1/3 - 1/4 + 1/5 - 1/6 + ...$
$= (1 + 1/3 + 1/5 + 1/7 + 1/9 + 1/11 + ...) - (1/2 + 1/4 + 1/6 + 1/8 + 1/10 + 1/12 + ...$) (by the above section, $1 - 1/2 + 1/3 - 1/4 + 1/5 - 1/6 + ...$ is absolutely convergent, thus, rearrangements do not change the value of the sum)
$= (1 + 1/3 + 1/5 + 1/7 + 1/9 + 1/11 + ...) + ((1/2 + 1/4 + 1/6 + 1/8 + 1/10 + 1/12 + ...) - 2*(1/2 + 1/4 + 1/6 + 1/8 + 1/10 + 1/12 + ...))$
$= ((1 + 1/3 + 1/5 + 1/7 + 1/9 + 1/11 + ...) + (1/2 + 1/4 + 1/6 + 1/8 + 1/10 + 1/12 + ...)) - 2*(1/2 + 1/4 + 1/6 + 1/8 + 1/10 + 1/12 + ...)$
$= (1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 + ...) - (2/2 + 2/4 + 2/6 + 2/8 + 2/10 + 2/12 + ...)$
$= (1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 + ...) - (1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 + ...)$
$= 0$
We proved that $ln(2) = 0$, and since $ln(1) = 0$, hence $ln(2) = ln(1)$, besides, since the function ln is injective function in the interval ($0,\infty$), thus we have $2 = 1$, i.e. $1 = 2$, and the proof is done.

$\blacksquare$





