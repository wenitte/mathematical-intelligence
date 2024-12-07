Let's break down this intricate mathematical proof into simpler, less formal language:

The theorem we're trying to explain is Wilson's theorem. What it essentially says is that for every prime number p, if you take the factorial of p-1 and subtract 1, you get a multiple of p.

The proof then makes use of the concept of inverse properties. For any number 'a' between 1 and p-1, there exists a unique 'a*' from the same set such that multiplying 'a' and 'a*' results in 1 when looked at under a 'modulo p' operation (essentially the remainder you get when you divide by p). This 'a*' is essentially the multiplicative inverse of 'a' in modulo p operation. The way we establish that 'a' and 'a*' are inverses is because when we apply the same definition to 'a*', we get back 'a'. Furthermore, 'a' equals 'a*' only when the square of 'a' leaves a remainder of 1 when divided by p.

Now we look at this interesting behavior that's a part of this proof - if a number's square results in remainder 1 when divided by p (where p is a prime number), then such a number is either 1 or (p-1).

Next, we employ a strategy that involves pairing the numbers from 1 to (p-1) inclusively, where each pair consists of two numbers that when multiplied together, results in remainder 1 when divided by p. With this pairing strategy, it can be said that the factorial of (p-1) can be viewed as a multiplication of 1 and (p-1) with the pairs' multiplication. Only 1 and (p-1) remain unpaired.

After following the above steps, we find that as per our pairing strategy, because the multiplication of each pair gives a remainder of 1 when divided by p, we end up with (p-1)! equivalent to a negative remainder when divided by p (which is -1).

This entire process is then demonstrated with an example wherein p is 11. We perform modular arithmetic on the factorial of 10 (which is p-1 in this case). We group the numbers in pairs which give a remainder of 1 when multiplied together and divided by 11. Finally, we see that as per Wilson's Theorem, the factorial of 10 gives a remainder of -1 when divided by 11.

Therefore, Wilson's Theorem is proved.