# 

Source: https://proofwiki.org/wiki/Product_of_r_Choose_m_with_m_Choose_k/Proof_2

Theorem
$\dbinom r m \dbinom m k = \dbinom r k \dbinom {r - k} {m - k}$


Proof
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


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients




