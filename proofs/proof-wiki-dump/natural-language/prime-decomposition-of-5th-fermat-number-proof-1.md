# 

Source: https://proofwiki.org/wiki/Prime_Decomposition_of_5th_Fermat_Number/Proof_1

Theorem
The prime decomposition of the $5$th Fermat number is given by:














\(\ds 2^{\paren {2^5} } + 1\)

\(=\)







\(\ds 4 \, 294 \, 967 \, 297\)





Sequence of Fermat Numbers














\(\ds \)

\(=\)







\(\ds 641 \times 6 \, 700 \, 417\)




















\(\ds \)

\(=\)







\(\ds \paren {5 \times 2^7 + 1} \times \paren {3 \times 17449 \times 2^7 + 1}\)











Proof
From Divisor of Fermat Number, if $2^{\paren {2^n} } + 1$ has a divisor, it will be in the form:

$k \, 2^{n + 2} + 1$
In the case of $n = 5$, a divisor of $2^{\paren {2^n} } + 1$ is then of the form:

$k \, 2^7 + 1 = k \times 128 + 1$
Further, such a number will (for small $k$ at least) be prime, otherwise it will itself have a divisor which is not of that form.
Thus we investigate:














\(\ds 1 \times 128 + 1\)

\(=\)







\(\ds 129\)

\(\ds = 3 \times 43\)



which is not prime














\(\ds 2 \times 128 + 1\)

\(=\)







\(\ds 257\)





which is prime














\(\ds 3 \times 128 + 1\)

\(=\)







\(\ds 385\)

\(\ds = 5 \times 7 \times 11\)



which is not prime














\(\ds 4 \times 128 + 1\)

\(=\)







\(\ds 513\)

\(\ds = 3^3 \times 19\)



which is not prime














\(\ds 5 \times 128 + 1\)

\(=\)







\(\ds 641\)





which is prime














\(\ds 6 \times 128 + 1\)

\(=\)







\(\ds 769\)





which is prime



We have that:














\(\ds 2^{32} - 1\)

\(=\)







\(\ds \paren {2^{16} + 1} \paren {2^{16} - 1}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {2^{16} + 1} \paren {2^8 - 1} \paren {2^8 + 1}\)









But

$2^8 + 1 = 257$
and so:

$2^{\paren {2^5} } - 1 \equiv 0 \pmod {257}$
which means:

$2^{\paren {2^5} } + 1 \equiv 2 \pmod {257}$
so there is no need to do a trial division of $2^{\paren {2^5} } + 1$ by $257$.

Now dividing $4 \, 294 \, 967 \, 297$ by $641$ we find:

          6 700 417
    ---------------
641 ) 4 294 967 297
      3 846
      -----
        448 9
        448 7
        -----
            267 2
            256 4
            -----
             10 89
              6 41
             -----
              4 487
              4 487
              =====

and the divisor has been found.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $641$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $641$




