# 

Source: https://proofwiki.org/wiki/Reciprocal_of_49_shows_Powers_of_2_in_Decimal_Expansion

Theorem
The decimal expansion of the reciprocal of $49$ contains the powers of $2$:

$\dfrac 1 {49} = 0 \cdotp \dot 02040 \, 81632 \, 65306 \, 12244 \, 89795 \, 91836 \, 73469 \, 38775 \, 5 \dot 1$


Proof
From Reciprocal of $49$:

$\dfrac 1 {49} = 0 \cdotp \dot 02040 \, 81632 \, 65306 \, 12244 \, 89795 \, 91836 \, 73469 \, 38775 \, 5 \dot 1$

Adding up powers of $2$, shifted appropriately to the right:

02
  04
    08
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
                              262144
                                524288
                                 1048576
                                   2097152
                                     4194304
                                       8388608
                                        16777216
                                          33554432
                                            67108864
                                             134217728
                                               268435456
                                                 536870912
                                                  1073741824
                                                    2147483648
                                                      4294967296
                                                        8589934592
                                                         ...........
--------------------------------------------------------------------
020408163265306122448979591836734693877551020408163265305947144192
--------------------------------------------------------------------
                     1 1 1111 11  11212122222112222222322222111

As can be seen, the decimal expansion of $\dfrac 1 {49}$ matches the sum of the shifted powers of $2$ (to the limits of calculation) and the pattern is apparent.

This is what is to be expected, because:

$0 \cdotp 02 + 0 \cdotp 0004 + 0 \cdotp 000008 + 0 \cdotp 00000016 + \cdots$
is nothing else but:

$\dfrac 1 {50} + \paren {\dfrac 1 {50} }^2 + \paren {\dfrac 1 {50} }^3 + \paren {\dfrac 1 {50} }^4 + \cdots = \ds \sum_{k \mathop \ge 1} \paren {\dfrac 1 {50} }^k$

Hence:














\(\ds \sum_{k \mathop \ge 1} \paren {\dfrac 1 {50} }^k\)

\(=\)







\(\ds \dfrac {1 / 50} {1 - 1 / 50}\)





Sum of Infinite Geometric Sequence: Corollary 1














\(\ds \)

\(=\)







\(\ds \dfrac 1 {50 - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {49}\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $49$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $49$




