# 

Source: https://proofwiki.org/wiki/Reciprocal_of_19_from_Sum_of_Powers_of_2_Backwards

Theorem
The decimal expansion of the reciprocal of $19$ can be constructed by summing the powers of $2$, offset progressively backwards by $1$ digit:

                         1
                        2
                       4
                      8
                    16
                   32
                  64
                128
               256
              512
            1024
           2048
          4096
         8192
       16384
      32768
     65536
   131072
+ 262144
 ......
--------------------------
.......1052631578947368421

while:

$\dfrac 1 {19} = 0 \cdotp \dot 05263 \, 15789 \, 47368 \, 42 \dot 1$


Proof
We confirm that from Reciprocal of $19$:

$\dfrac 1 {19} = 0 \cdotp \dot 05263 \, 15789 \, 47368 \, 42 \dot 1$

The construction above can be expressed as the sum:

$\ds \sum_{k \mathop \ge 0} \paren {2^k \times 10^k} = \sum_{k \mathop \ge 0} 20^k$
Obviously this sum does not converge.
However we can still analyse the last $N$ digits from this construction for every positive integer $N$.
From $k \ge N$ onwards, the last $N$ digits will not be affected by further additions of $20^k$ because:

$\forall k \ge N: 20^k \equiv 20^{k - N} \times 2^N \times 10^N \equiv 0 \pmod {10^N}$
By Number times Recurring Part of Reciprocal gives 9-Repdigit/Generalization, the last $N$ digits of this number coincides with the decimal expansion of the reciprocal of $19$ if and only if:

$\ds \sum_{k \mathop = 0}^{N - 1} 20^k \times 19 \equiv -1 \pmod {10^N}$
We have:














\(\ds \sum_{k \mathop = 0}^{N - 1} 20^k \times 19\)

\(=\)







\(\ds \frac {20^N - 1} {20 - 1} \times 19\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds 20^N - 1\)




















\(\ds \)

\(\equiv\)







\(\ds -1 \pmod {10^N}\)









Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $052,631,578,947,368,421$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $052,631,578,947,368,421$




