# 

Source: https://proofwiki.org/wiki/Factors_of_Sums_of_Powers_of_100,000



Theorem
All integers $n$ of the form:

$n = \ds \sum_{k \mathop = 0}^m 10^{5 k}$ for $m \in \Z_{> 0}$
are composite.


General Result
All integers $n$ of the form:

$n = \ds \sum_{k \mathop = 0}^m 10^{r k}$ for $m \in \Z_{> 0}$
are composite for $r \ge 2$.
The only exceptions are:

$r = 2^k, m = 1$ for some $k \in \N$
$r = m + 1 =$ some odd prime
in which cases $n$ may be prime.


Proof













\(\ds \sum_{k \mathop = 0}^1 10^{5 k}\)

\(=\)







\(\ds 100 \, 001\)




















\(\ds \)

\(=\)







\(\ds 11 \times 9091\)
























\(\ds \sum_{k \mathop = 0}^2 10^{5 k}\)

\(=\)







\(\ds 10 \, 000 \, 100 \, 001\)




















\(\ds \)

\(=\)







\(\ds 3 \times 31 \times 37 \times 2 \, 906 \, 161\)
























\(\ds \sum_{k \mathop = 0}^3 10^{5 k}\)

\(=\)







\(\ds 1 \, 000 \, 010 \, 000 \, 100 \, 001\)




















\(\ds \)

\(=\)







\(\ds 11 \times 101 \times 3541 \times 9091 \times 27961\)










Notice that:

$\ds \sum_{k \mathop = 0}^m 10^{5 k} \times R_5 = R_{5 \paren {m + 1} }$
where $R_i$ is the $i$th repunit.

Suppose $p \divides m + 1$, where $p$ is a prime that is not $5$.
By Divisors of Repunit with Composite Index:

$R_p \divides R_{5 \paren {m + 1} }$
By Prime not Divisor implies Coprime, $p$ and $5$ are coprime.
By Condition for Repunits to be Coprime, $R_p$ and $R_5$ are coprime.
By Euclid's Lemma:

$R_p \divides \dfrac {R_{5 \paren {m + 1} } } {R_5} = n$

Suppose $25 \divides m + 1$.
By Divisors of Repunit with Composite Index:

$R_5 \divides R_{25}$
and:

$R_{25} \divides R_{5 \paren {m + 1} }$
So we have:

$\dfrac {R_{25}} {R_5} \divides \dfrac {R_{5 \paren {m + 1} } } {R_5} = n$

The final case is $m + 1 = 5$.
This is the case $n = 100 \, 001 \, 000 \, 010 \, 000 \, 100 \, 001$.
We have:

$n = 21 \, 401 \times 25 \, 601 \times 182 \, 521 \, 213 \, 001$

Thus all cases are covered.
$\blacksquare$


Historical Note
According to David Wells in his Curious and Interesting Numbers, 2nd ed. of $1997$, this appears in Crux Mathematicorum, volume $5$, page $147$, and was attributed to Wilke (probably Kenneth M. Wilke).
However, examination of the archives of that magazine online does not corroborate this.


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $100,001$




