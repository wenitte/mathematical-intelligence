# 

Source: https://proofwiki.org/wiki/Product_of_r_Choose_m_with_m_Choose_k



Theorem
Let $r \in \R, m \in \Z, k \in \Z$.
Then:

$\dbinom r m \dbinom m k = \dbinom r k \dbinom {r - k} {m - k}$
where $\dbinom r m$ is a binomial coefficient.


Complex Numbers
For all $z, w \in \C$ such that it is not the case that $z$ is a negative integer and $t, w$ integers:

$\dbinom z t \dbinom t w = \dbinom z w \dbinom {z - w} {t - w}$
where $\dbinom z w$ is a binomial coefficient.


Proof 1
Integral Index
Let $r \in \Z$.

Then:














\(\ds \binom r m \binom m k\)

\(=\)







\(\ds \frac {r^{\underline m} } {m!} \frac {m^{\underline k} } {k!}\)




















\(\ds \)

\(=\)







\(\ds \frac {r! m!} {m! \paren {r - m}! k! \paren {m - k}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {r! \paren {r - k}!} {k! \paren {r - k}! \paren {m - k}! \paren {r - m}!}\)




















\(\ds \)

\(=\)







\(\ds \binom r k \binom {r - k} {m - k}\)









$\Box$


Real Index
Both sides of the above equation are polynomials in $r$.
Since these polynomials agree for all $r \in \Z$, they must agree for all $r \in \R$.
$\blacksquare$


Proof 2
Consider the trinomial coefficient:

$\dbinom r {k, m - k, r - m}$

We use Multinomial Coefficient expressed as Product of Binomial Coefficients:

$\dbinom {k_1 + k_2 + k_3} {k_1, k_2, k_3} = \dbinom {k_1 + k_2} {k_1} \dbinom {k_1 + k_2 + k_3} {k_1 + k_2}$
and substitute as appropriate for $k_1, k_2, k_3$.

We have:














\(\ds \)

\(\)







\(\ds \dbinom r {k, m - k, r - m}\)




















\(\ds \)

\(=\)







\(\ds \dbinom {\left({m - k}\right) + \left({r - m}\right) + k} {m - k, r - m, k}\)




















\(\ds \)

\(=\)







\(\ds \dbinom {\left({m - k}\right) + \left({r - m}\right)} {m - k} \dbinom {\left({m - k}\right) + \left({r - m}\right) + k} {\left({m - k}\right) + \left({r - m}\right)}\)





Multinomial Coefficient expressed as Product of Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \dbinom {r - k} {m - k} \dbinom r m\)










Similarly:














\(\ds \)

\(\)







\(\ds \dbinom r {k, m - k, r - m}\)




















\(\ds \)

\(=\)







\(\ds \dbinom {k + \left({m - k}\right) + \left({r - m}\right)} {k, m - k, r - m}\)




















\(\ds \)

\(=\)







\(\ds \dbinom {k + \left({m - k}\right)} k \dbinom {k + \left({m - k}\right) + \left({r - m}\right)} {\left({m - k}\right) + k}\)





Multinomial Coefficient expressed as Product of Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \dbinom m k \dbinom r m\)









$\blacksquare$

The result follows on equating the two expressions.





